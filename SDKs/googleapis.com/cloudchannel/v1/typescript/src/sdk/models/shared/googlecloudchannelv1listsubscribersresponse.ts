import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1ListSubscribersResponse
/** 
 * Response Message for ListSubscribers.
**/
export class GoogleCloudChannelV1ListSubscribersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=serviceAccounts" })
  serviceAccounts?: string[];

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
