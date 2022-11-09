import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroupClientData } from "./groupclientdata";
import { ContactGroupMetadata } from "./contactgroupmetadata";

export enum ContactGroupGroupTypeEnum {
    GroupTypeUnspecified = "GROUP_TYPE_UNSPECIFIED"
,    UserContactGroup = "USER_CONTACT_GROUP"
,    SystemContactGroup = "SYSTEM_CONTACT_GROUP"
}


// ContactGroup
/** 
 * A contact group.
**/
export class ContactGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientData", elemType: shared.GroupClientData })
  clientData?: GroupClientData[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=formattedName" })
  formattedName?: string;

  @Metadata({ data: "json, name=groupType" })
  groupType?: ContactGroupGroupTypeEnum;

  @Metadata({ data: "json, name=memberCount" })
  memberCount?: number;

  @Metadata({ data: "json, name=memberResourceNames" })
  memberResourceNames?: string[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: ContactGroupMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
