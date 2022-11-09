import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Channel } from "./channel";


// ListChannelsResponse
/** 
 * The response message for the `ListChannels` method.
**/
export class ListChannelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.Channel })
  channels?: Channel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
