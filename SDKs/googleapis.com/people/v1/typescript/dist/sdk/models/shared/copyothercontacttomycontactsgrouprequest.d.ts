import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CopyOtherContactToMyContactsGroupRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
/**
 * A request to copy an "Other contact" to my contacts group.
**/
export declare class CopyOtherContactToMyContactsGroupRequest extends SpeakeasyBase {
    copyMask?: string;
    readMask?: string;
    sources?: CopyOtherContactToMyContactsGroupRequestSourcesEnum[];
}
