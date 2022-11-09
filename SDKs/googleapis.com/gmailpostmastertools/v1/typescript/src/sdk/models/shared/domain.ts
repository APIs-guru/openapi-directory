import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DomainPermissionEnum {
    PermissionUnspecified = "PERMISSION_UNSPECIFIED"
,    Owner = "OWNER"
,    Reader = "READER"
,    None = "NONE"
}


// Domain
/** 
 * A registered domain resource in the Postmaster API.
**/
export class Domain extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: DomainPermissionEnum;
}
