import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";



// HiddenPlayer
/** 
 * The HiddenPlayer resource.
**/
export class HiddenPlayer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hiddenTimeMillis" })
  hiddenTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=player" })
  player?: Player;
}
