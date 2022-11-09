import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TenantResourceStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    PendingCreate = "PENDING_CREATE"
,    Active = "ACTIVE"
,    PendingDelete = "PENDING_DELETE"
,    Failed = "FAILED"
,    Deleted = "DELETED"
}


// TenantResource
/** 
 * Resource constituting the TenancyUnit.
**/
export class TenantResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=status" })
  status?: TenantResourceStatusEnum;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
