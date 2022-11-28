import { SpeakeasyBase } from "../../../internal/utils";
import { Principal } from "./principal";
export declare enum ItemAclAclInheritanceTypeEnum {
    NotApplicable = "NOT_APPLICABLE",
    ChildOverride = "CHILD_OVERRIDE",
    ParentOverride = "PARENT_OVERRIDE",
    BothPermit = "BOTH_PERMIT"
}
/**
 * Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls).
**/
export declare class ItemAcl extends SpeakeasyBase {
    aclInheritanceType?: ItemAclAclInheritanceTypeEnum;
    deniedReaders?: Principal[];
    inheritAclFrom?: string;
    owners?: Principal[];
    readers?: Principal[];
}
