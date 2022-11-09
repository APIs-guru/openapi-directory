import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WatchRequestLabelFilterActionEnum {
    Include = "include"
,    Exclude = "exclude"
}


// WatchRequest
/** 
 * Set up or update a new push notification watch on this user's mailbox.
**/
export class WatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelFilterAction" })
  labelFilterAction?: WatchRequestLabelFilterActionEnum;

  @Metadata({ data: "json, name=labelIds" })
  labelIds?: string[];

  @Metadata({ data: "json, name=topicName" })
  topicName?: string;
}
