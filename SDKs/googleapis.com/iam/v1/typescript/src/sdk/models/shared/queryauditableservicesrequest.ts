import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryAuditableServicesRequest
/** 
 * A request to get the list of auditable services for a resource.
**/
export class QueryAuditableServicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;
}
