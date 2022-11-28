import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupClientData } from "./groupclientdata";
import { ContactGroupMetadata } from "./contactgroupmetadata";


export enum ContactGroupGroupTypeEnum {
    GroupTypeUnspecified = "GROUP_TYPE_UNSPECIFIED",
    UserContactGroup = "USER_CONTACT_GROUP",
    SystemContactGroup = "SYSTEM_CONTACT_GROUP"
}


// ContactGroupInput
/** 
 * A contact group.
**/
export class ContactGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientData", elemType: GroupClientData })
  clientData?: GroupClientData[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}


// ContactGroup
/** 
 * A contact group.
**/
export class ContactGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientData", elemType: GroupClientData })
  clientData?: GroupClientData[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedName" })
  formattedName?: string;

  @SpeakeasyMetadata({ data: "json, name=groupType" })
  groupType?: ContactGroupGroupTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=memberCount" })
  memberCount?: number;

  @SpeakeasyMetadata({ data: "json, name=memberResourceNames" })
  memberResourceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ContactGroupMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
