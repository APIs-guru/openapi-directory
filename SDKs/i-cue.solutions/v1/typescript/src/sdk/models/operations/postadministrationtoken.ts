import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAdministrationTokenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostAdministrationTokenRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  newTokenRequest?: shared.NewTokenRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  newTokenRequest1?: shared.NewTokenRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  newTokenRequest2?: shared.NewTokenRequest;
}


export class PostAdministrationTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostAdministrationTokenHeaders;

  @SpeakeasyMetadata()
  request?: PostAdministrationTokenRequests;
}


export class PostAdministrationTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdministrationToken200ApplicationJsonUuidString?: string;

  @SpeakeasyMetadata()
  postAdministrationToken200TextJsonUuidString?: string;

  @SpeakeasyMetadata()
  postAdministrationToken200TextPlainUuidString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
