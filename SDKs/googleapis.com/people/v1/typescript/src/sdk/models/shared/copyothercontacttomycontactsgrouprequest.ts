import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CopyOtherContactToMyContactsGroupRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED"
,    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE"
,    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT"
,    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


// CopyOtherContactToMyContactsGroupRequest
/** 
 * A request to copy an "Other contact" to my contacts group.
**/
export class CopyOtherContactToMyContactsGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=copyMask" })
  copyMask?: string;

  @Metadata({ data: "json, name=readMask" })
  readMask?: string;

  @Metadata({ data: "json, name=sources" })
  sources?: CopyOtherContactToMyContactsGroupRequestSourcesEnum[];
}
