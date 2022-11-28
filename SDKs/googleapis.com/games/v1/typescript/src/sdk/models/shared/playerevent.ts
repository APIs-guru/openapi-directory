import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlayerEvent
/** 
 * An event status resource.
**/
export class PlayerEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitionId" })
  definitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedNumEvents" })
  formattedNumEvents?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=numEvents" })
  numEvents?: string;

  @SpeakeasyMetadata({ data: "json, name=playerId" })
  playerId?: string;
}
