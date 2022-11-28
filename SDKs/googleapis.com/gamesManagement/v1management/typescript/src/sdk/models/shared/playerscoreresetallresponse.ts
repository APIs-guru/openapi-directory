import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerScoreResetResponse } from "./playerscoreresetresponse";



// PlayerScoreResetAllResponse
/** 
 * A list of leaderboard reset resources.
**/
export class PlayerScoreResetAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: PlayerScoreResetResponse })
  results?: PlayerScoreResetResponse[];
}
