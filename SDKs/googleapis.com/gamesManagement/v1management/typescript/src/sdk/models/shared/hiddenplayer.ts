import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Player } from "./player";


// HiddenPlayer
/** 
 * The HiddenPlayer resource.
**/
export class HiddenPlayer extends SpeakeasyBase {
  @Metadata({ data: "json, name=hiddenTimeMillis" })
  hiddenTimeMillis?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=player" })
  player?: Player;
}
