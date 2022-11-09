import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Spoke } from "./spoke";


// ListSpokesResponse
/** 
 * The response for HubService.ListSpokes.
**/
export class ListSpokesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=spokes", elemType: shared.Spoke })
  spokes?: Spoke[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
