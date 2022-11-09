import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveItem } from "./driveitem";


// FileComment
/** 
 * A comment on a file.
**/
export class FileComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=legacyCommentId" })
  legacyCommentId?: string;

  @Metadata({ data: "json, name=legacyDiscussionId" })
  legacyDiscussionId?: string;

  @Metadata({ data: "json, name=linkToDiscussion" })
  linkToDiscussion?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: DriveItem;
}
