import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Channel } from "./channel";


// ListChannelsResponse
/** 
 * Response message for ListChannels.
**/
export class ListChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.Channel })
  channels?: Channel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
