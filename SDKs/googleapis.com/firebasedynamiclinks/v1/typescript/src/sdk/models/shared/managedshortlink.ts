import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";

export enum ManagedShortLinkFlaggedAttributeEnum {
    UnspecifiedAttribute = "UNSPECIFIED_ATTRIBUTE"
,    Spam = "SPAM"
}

export enum ManagedShortLinkVisibilityEnum {
    UnspecifiedVisibility = "UNSPECIFIED_VISIBILITY"
,    Unarchived = "UNARCHIVED"
,    Archived = "ARCHIVED"
,    NeverShown = "NEVER_SHOWN"
}


// ManagedShortLink
/** 
 * Managed Short Link.
**/
export class ManagedShortLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=flaggedAttribute" })
  flaggedAttribute?: ManagedShortLinkFlaggedAttributeEnum[];

  @Metadata({ data: "json, name=info" })
  info?: DynamicLinkInfo;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=linkName" })
  linkName?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: ManagedShortLinkVisibilityEnum;
}
