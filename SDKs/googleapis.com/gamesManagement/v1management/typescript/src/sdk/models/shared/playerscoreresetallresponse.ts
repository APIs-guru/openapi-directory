import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerScoreResetResponse } from "./playerscoreresetresponse";


// PlayerScoreResetAllResponse
/** 
 * A list of leaderboard reset resources.
**/
export class PlayerScoreResetAllResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=results", elemType: shared.PlayerScoreResetResponse })
  results?: PlayerScoreResetResponse[];
}
