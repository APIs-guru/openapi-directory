import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsOptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetEventsOptionsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetEventsOptionsSecurity;
}


export class GetEventsOptionsResponse extends SpeakeasyBase {
  @Metadata()
  auditEventTypesResp?: shared.AuditEventTypesResp;

  @Metadata()
  contentType: string;

  @Metadata()
  errorForbidden?: shared.ErrorForbidden;

  @Metadata()
  errorUnauthorized?: shared.ErrorUnauthorized;

  @Metadata()
  noContent?: shared.NoContent;

  @Metadata()
  statusCode: number;
}
