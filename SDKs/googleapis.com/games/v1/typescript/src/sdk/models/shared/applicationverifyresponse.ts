import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationVerifyResponse
/** 
 * A third party application verification response resource.
**/
export class ApplicationVerifyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternate_player_id" })
  alternatePlayerId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=player_id" })
  playerId?: string;
}
