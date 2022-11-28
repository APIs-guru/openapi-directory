import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DomainPermissionEnum {
    PermissionUnspecified = "PERMISSION_UNSPECIFIED",
    Owner = "OWNER",
    Reader = "READER",
    None = "NONE"
}


// Domain
/** 
 * A registered domain resource in the Postmaster API.
**/
export class Domain extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: DomainPermissionEnum;
}
