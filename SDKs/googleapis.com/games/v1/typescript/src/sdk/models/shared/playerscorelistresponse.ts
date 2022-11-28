import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlayerScoreResponse } from "./playerscoreresponse";



// PlayerScoreListResponse
/** 
 * A list of score submission statuses.
**/
export class PlayerScoreListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=submittedScores", elemType: PlayerScoreResponse })
  submittedScores?: PlayerScoreResponse[];
}
