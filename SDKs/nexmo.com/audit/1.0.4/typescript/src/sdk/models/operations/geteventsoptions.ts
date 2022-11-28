import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsOptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetEventsOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetEventsOptionsSecurity;
}


export class GetEventsOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  auditEventTypesResp?: shared.AuditEventTypesResp;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorForbidden?: shared.ErrorForbidden;

  @SpeakeasyMetadata()
  errorUnauthorized?: shared.ErrorUnauthorized;

  @SpeakeasyMetadata()
  noContent?: shared.NoContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
