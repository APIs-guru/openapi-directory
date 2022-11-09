import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAdministrationEntityHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PutAdministrationEntityRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  toggleRequest?: shared.ToggleRequest;

  @Metadata({ data: "request, media_type=application/json" })
  toggleRequest1?: shared.ToggleRequest;

  @Metadata({ data: "request, media_type=text/json" })
  toggleRequest2?: shared.ToggleRequest;
}


export class PutAdministrationEntityRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAdministrationEntityHeaders;

  @Metadata()
  request?: PutAdministrationEntityRequests;
}


export class PutAdministrationEntityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
