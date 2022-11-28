import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReviewReply
/** 
 * Represents the location owner/manager's reply to a review.
**/
export class ReviewReply extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
