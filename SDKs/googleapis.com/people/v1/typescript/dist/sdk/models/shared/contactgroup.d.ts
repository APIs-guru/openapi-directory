import { SpeakeasyBase } from "../../../internal/utils";
import { GroupClientData } from "./groupclientdata";
import { ContactGroupMetadata } from "./contactgroupmetadata";
export declare enum ContactGroupGroupTypeEnum {
    GroupTypeUnspecified = "GROUP_TYPE_UNSPECIFIED",
    UserContactGroup = "USER_CONTACT_GROUP",
    SystemContactGroup = "SYSTEM_CONTACT_GROUP"
}
/**
 * A contact group.
**/
export declare class ContactGroupInput extends SpeakeasyBase {
    clientData?: GroupClientData[];
    etag?: string;
    name?: string;
    resourceName?: string;
}
/**
 * A contact group.
**/
export declare class ContactGroup extends SpeakeasyBase {
    clientData?: GroupClientData[];
    etag?: string;
    formattedName?: string;
    groupType?: ContactGroupGroupTypeEnum;
    memberCount?: number;
    memberResourceNames?: string[];
    metadata?: ContactGroupMetadata;
    name?: string;
    resourceName?: string;
}
