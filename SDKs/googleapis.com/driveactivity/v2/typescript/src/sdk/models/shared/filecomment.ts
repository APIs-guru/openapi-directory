import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveItem } from "./driveitem";



// FileComment
/** 
 * A comment on a file.
**/
export class FileComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=legacyCommentId" })
  legacyCommentId?: string;

  @SpeakeasyMetadata({ data: "json, name=legacyDiscussionId" })
  legacyDiscussionId?: string;

  @SpeakeasyMetadata({ data: "json, name=linkToDiscussion" })
  linkToDiscussion?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: DriveItem;
}
