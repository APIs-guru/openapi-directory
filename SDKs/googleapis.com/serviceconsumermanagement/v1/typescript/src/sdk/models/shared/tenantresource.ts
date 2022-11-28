import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TenantResourceStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    PendingCreate = "PENDING_CREATE",
    Active = "ACTIVE",
    PendingDelete = "PENDING_DELETE",
    Failed = "FAILED",
    Deleted = "DELETED"
}


// TenantResource
/** 
 * Resource constituting the TenancyUnit.
**/
export class TenantResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TenantResourceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
