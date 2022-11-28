import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAdministrationEntityHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PostAdministrationEntityRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  newEntityRequest?: shared.NewEntityRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  newEntityRequest1?: shared.NewEntityRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  newEntityRequest2?: shared.NewEntityRequest;
}


export class PostAdministrationEntityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostAdministrationEntityHeaders;

  @SpeakeasyMetadata()
  request?: PostAdministrationEntityRequests;
}


export class PostAdministrationEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdministrationEntity200ApplicationJsonUuidString?: string;

  @SpeakeasyMetadata()
  postAdministrationEntity200TextJsonUuidString?: string;

  @SpeakeasyMetadata()
  postAdministrationEntity200TextPlainUuidString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
