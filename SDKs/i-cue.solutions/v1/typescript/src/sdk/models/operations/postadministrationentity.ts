import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAdministrationEntityHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostAdministrationEntityRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  newEntityRequest?: shared.NewEntityRequest;

  @Metadata({ data: "request, media_type=application/json" })
  newEntityRequest1?: shared.NewEntityRequest;

  @Metadata({ data: "request, media_type=text/json" })
  newEntityRequest2?: shared.NewEntityRequest;
}


export class PostAdministrationEntityRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostAdministrationEntityHeaders;

  @Metadata()
  request?: PostAdministrationEntityRequests;
}


export class PostAdministrationEntityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdministrationEntity200ApplicationJsonUuidString?: string;

  @Metadata()
  postAdministrationEntity200TextJsonUuidString?: string;

  @Metadata()
  postAdministrationEntity200TextPlainUuidString?: string;

  @Metadata()
  statusCode: number;
}
