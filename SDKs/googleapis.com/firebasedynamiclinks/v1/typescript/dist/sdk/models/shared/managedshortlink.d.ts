import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
export declare enum ManagedShortLinkFlaggedAttributeEnum {
    UnspecifiedAttribute = "UNSPECIFIED_ATTRIBUTE",
    Spam = "SPAM"
}
export declare enum ManagedShortLinkVisibilityEnum {
    UnspecifiedVisibility = "UNSPECIFIED_VISIBILITY",
    Unarchived = "UNARCHIVED",
    Archived = "ARCHIVED",
    NeverShown = "NEVER_SHOWN"
}
/**
 * Managed Short Link.
**/
export declare class ManagedShortLink extends SpeakeasyBase {
    creationTime?: string;
    flaggedAttribute?: ManagedShortLinkFlaggedAttributeEnum[];
    info?: DynamicLinkInfo;
    link?: string;
    linkName?: string;
    visibility?: ManagedShortLinkVisibilityEnum;
}
