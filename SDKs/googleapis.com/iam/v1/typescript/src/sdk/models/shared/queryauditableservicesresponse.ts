import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuditableService } from "./auditableservice";


// QueryAuditableServicesResponse
/** 
 * A response containing a list of auditable services for a resource.
**/
export class QueryAuditableServicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=services", elemType: shared.AuditableService })
  services?: AuditableService[];
}
