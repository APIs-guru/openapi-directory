import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventPathParams;

  @SpeakeasyMetadata()
  security: GetEventSecurity;
}


export class GetEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  auditEvent?: shared.AuditEvent;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorNotFound?: shared.ErrorNotFound;

  @SpeakeasyMetadata()
  errorUnauthorized?: shared.ErrorUnauthorized;

  @SpeakeasyMetadata()
  statusCode: number;
}
