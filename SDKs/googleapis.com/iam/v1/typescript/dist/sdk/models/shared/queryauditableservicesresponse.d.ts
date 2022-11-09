import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuditableService } from "./auditableservice";
/**
 * A response containing a list of auditable services for a resource.
**/
export declare class QueryAuditableServicesResponse extends SpeakeasyBase {
    services?: AuditableService[];
}
