import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAdministrationEntityHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PutAdministrationEntityRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  toggleRequest?: shared.ToggleRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  toggleRequest1?: shared.ToggleRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  toggleRequest2?: shared.ToggleRequest;
}


export class PutAdministrationEntityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PutAdministrationEntityHeaders;

  @SpeakeasyMetadata()
  request?: PutAdministrationEntityRequests;
}


export class PutAdministrationEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
