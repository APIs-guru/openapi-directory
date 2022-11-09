import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerEvent } from "./playerevent";


// PlayerEventListResponse
/** 
 * A ListByPlayer response.
**/
export class PlayerEventListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.PlayerEvent })
  items?: PlayerEvent[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
