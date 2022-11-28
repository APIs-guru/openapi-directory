import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WatchRequestLabelFilterActionEnum {
    Include = "include",
    Exclude = "exclude"
}


// WatchRequest
/** 
 * Set up or update a new push notification watch on this user's mailbox.
**/
export class WatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelFilterAction" })
  labelFilterAction?: WatchRequestLabelFilterActionEnum;

  @SpeakeasyMetadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=topicName" })
  topicName?: string;
}
