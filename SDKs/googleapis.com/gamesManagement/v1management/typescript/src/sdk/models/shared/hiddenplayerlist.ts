import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HiddenPlayer } from "./hiddenplayer";


// HiddenPlayerList
/** 
 * A list of hidden players.
**/
export class HiddenPlayerList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.HiddenPlayer })
  items?: HiddenPlayer[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
