import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Principal } from "./principal";
import { Principal } from "./principal";
import { Principal } from "./principal";

export enum ItemAclAclInheritanceTypeEnum {
    NotApplicable = "NOT_APPLICABLE"
,    ChildOverride = "CHILD_OVERRIDE"
,    ParentOverride = "PARENT_OVERRIDE"
,    BothPermit = "BOTH_PERMIT"
}


// ItemAcl
/** 
 * Access control list information for the item. For more information see [Map ACLs](https://developers.google.com/cloud-search/docs/guides/acls).
**/
export class ItemAcl extends SpeakeasyBase {
  @Metadata({ data: "json, name=aclInheritanceType" })
  aclInheritanceType?: ItemAclAclInheritanceTypeEnum;

  @Metadata({ data: "json, name=deniedReaders", elemType: shared.Principal })
  deniedReaders?: Principal[];

  @Metadata({ data: "json, name=inheritAclFrom" })
  inheritAclFrom?: string;

  @Metadata({ data: "json, name=owners", elemType: shared.Principal })
  owners?: Principal[];

  @Metadata({ data: "json, name=readers", elemType: shared.Principal })
  readers?: Principal[];
}
