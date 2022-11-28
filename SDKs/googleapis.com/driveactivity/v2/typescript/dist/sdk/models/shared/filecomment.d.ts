import { SpeakeasyBase } from "../../../internal/utils";
import { DriveItem } from "./driveitem";
/**
 * A comment on a file.
**/
export declare class FileComment extends SpeakeasyBase {
    legacyCommentId?: string;
    legacyDiscussionId?: string;
    linkToDiscussion?: string;
    parent?: DriveItem;
}
