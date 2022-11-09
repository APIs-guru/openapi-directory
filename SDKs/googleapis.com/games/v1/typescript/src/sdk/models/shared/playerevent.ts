import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlayerEvent
/** 
 * An event status resource.
**/
export class PlayerEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=definitionId" })
  definitionId?: string;

  @Metadata({ data: "json, name=formattedNumEvents" })
  formattedNumEvents?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=numEvents" })
  numEvents?: string;

  @Metadata({ data: "json, name=playerId" })
  playerId?: string;
}
