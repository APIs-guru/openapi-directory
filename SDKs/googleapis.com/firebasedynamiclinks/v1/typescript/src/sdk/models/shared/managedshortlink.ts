import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";


export enum ManagedShortLinkFlaggedAttributeEnum {
    UnspecifiedAttribute = "UNSPECIFIED_ATTRIBUTE",
    Spam = "SPAM"
}

export enum ManagedShortLinkVisibilityEnum {
    UnspecifiedVisibility = "UNSPECIFIED_VISIBILITY",
    Unarchived = "UNARCHIVED",
    Archived = "ARCHIVED",
    NeverShown = "NEVER_SHOWN"
}


// ManagedShortLink
/** 
 * Managed Short Link.
**/
export class ManagedShortLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=flaggedAttribute" })
  flaggedAttribute?: ManagedShortLinkFlaggedAttributeEnum[];

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: DynamicLinkInfo;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=linkName" })
  linkName?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: ManagedShortLinkVisibilityEnum;
}
