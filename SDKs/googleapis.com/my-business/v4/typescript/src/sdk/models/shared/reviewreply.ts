import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReviewReply
/** 
 * Represents the location owner/manager's reply to a review.
**/
export class ReviewReply extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
