import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HiddenPlayer } from "./hiddenplayer";



// HiddenPlayerList
/** 
 * A list of hidden players.
**/
export class HiddenPlayerList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: HiddenPlayer })
  items?: HiddenPlayer[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
