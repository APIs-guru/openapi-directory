import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetEventRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEventPathParams;

  @Metadata()
  security: GetEventSecurity;
}


export class GetEventResponse extends SpeakeasyBase {
  @Metadata()
  auditEvent?: shared.AuditEvent;

  @Metadata()
  contentType: string;

  @Metadata()
  errorNotFound?: shared.ErrorNotFound;

  @Metadata()
  errorUnauthorized?: shared.ErrorUnauthorized;

  @Metadata()
  statusCode: number;
}
