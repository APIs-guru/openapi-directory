import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Reply } from "./reply";


// ReplyList
/** 
 * A list of replies to a comment on a file.
**/
export class ReplyList extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=replies", elemType: shared.Reply })
  replies?: Reply[];
}
