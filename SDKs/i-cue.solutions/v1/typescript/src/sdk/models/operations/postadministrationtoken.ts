import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAdministrationTokenHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostAdministrationTokenRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  newTokenRequest?: shared.NewTokenRequest;

  @Metadata({ data: "request, media_type=application/json" })
  newTokenRequest1?: shared.NewTokenRequest;

  @Metadata({ data: "request, media_type=text/json" })
  newTokenRequest2?: shared.NewTokenRequest;
}


export class PostAdministrationTokenRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostAdministrationTokenHeaders;

  @Metadata()
  request?: PostAdministrationTokenRequests;
}


export class PostAdministrationTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdministrationToken200ApplicationJsonUuidString?: string;

  @Metadata()
  postAdministrationToken200TextJsonUuidString?: string;

  @Metadata()
  postAdministrationToken200TextPlainUuidString?: string;

  @Metadata()
  statusCode: number;
}
