import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditableService } from "./auditableservice";



// QueryAuditableServicesResponse
/** 
 * A response containing a list of auditable services for a resource.
**/
export class QueryAuditableServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=services", elemType: AuditableService })
  services?: AuditableService[];
}
