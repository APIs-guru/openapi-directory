import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlayerScoreResponse } from "./playerscoreresponse";


// PlayerScoreListResponse
/** 
 * A list of score submission statuses.
**/
export class PlayerScoreListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=submittedScores", elemType: shared.PlayerScoreResponse })
  submittedScores?: PlayerScoreResponse[];
}
