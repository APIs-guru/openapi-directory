import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";



// ListChannelsResponse
/** 
 * Response message for ListChannels.
**/
export class ListChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: Channel })
  channels?: Channel[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
