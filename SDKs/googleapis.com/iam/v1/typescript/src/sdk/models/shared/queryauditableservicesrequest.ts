import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryAuditableServicesRequest
/** 
 * A request to get the list of auditable services for a resource.
**/
export class QueryAuditableServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}
