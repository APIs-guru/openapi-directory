import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Spoke } from "./spoke";



// ListSpokesResponse
/** 
 * The response for HubService.ListSpokes.
**/
export class ListSpokesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spokes", elemType: Spoke })
  spokes?: Spoke[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
