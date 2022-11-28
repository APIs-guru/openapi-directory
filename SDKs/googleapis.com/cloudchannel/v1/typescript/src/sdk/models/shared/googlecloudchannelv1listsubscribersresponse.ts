import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1ListSubscribersResponse
/** 
 * Response Message for ListSubscribers.
**/
export class GoogleCloudChannelV1ListSubscribersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccounts" })
  serviceAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
