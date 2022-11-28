import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerEvent } from "./playerevent";



// PlayerEventListResponse
/** 
 * A ListByPlayer response.
**/
export class PlayerEventListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: PlayerEvent })
  items?: PlayerEvent[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
