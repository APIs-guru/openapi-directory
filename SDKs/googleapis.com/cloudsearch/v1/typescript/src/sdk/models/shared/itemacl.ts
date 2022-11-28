import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";


export enum ItemAclAclInheritanceTypeEnum {
    NotApplicable = "NOT_APPLICABLE",
    ChildOverride = "CHILD_OVERRIDE",
    ParentOverride = "PARENT_OVERRIDE",
    BothPermit = "BOTH_PERMIT"
}


// ItemAcl
/** 
 * Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls).
**/
export class ItemAcl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aclInheritanceType" })
  aclInheritanceType?: ItemAclAclInheritanceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=deniedReaders", elemType: Principal })
  deniedReaders?: Principal[];

  @SpeakeasyMetadata({ data: "json, name=inheritAclFrom" })
  inheritAclFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=owners", elemType: Principal })
  owners?: Principal[];

  @SpeakeasyMetadata({ data: "json, name=readers", elemType: Principal })
  readers?: Principal[];
}
