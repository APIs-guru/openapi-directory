import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationVerifyResponse
/** 
 * A third party application verification response resource.
**/
export class ApplicationVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternate_player_id" })
  alternatePlayerId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=player_id" })
  playerId?: string;
}
