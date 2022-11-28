import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reply } from "./reply";



// ReplyList
/** 
 * A list of replies to a comment on a file.
**/
export class ReplyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=replies", elemType: Reply })
  replies?: Reply[];
}
