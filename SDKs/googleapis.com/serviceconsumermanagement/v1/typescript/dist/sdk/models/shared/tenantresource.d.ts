import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum TenantResourceStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    PendingCreate = "PENDING_CREATE",
    Active = "ACTIVE",
    PendingDelete = "PENDING_DELETE",
    Failed = "FAILED",
    Deleted = "DELETED"
}
/**
 * Resource constituting the TenancyUnit.
**/
export declare class TenantResource extends SpeakeasyBase {
    resource?: string;
    status?: TenantResourceStatusEnum;
    tag?: string;
}
