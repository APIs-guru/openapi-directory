import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreSubmission } from "./scoresubmission";



// PlayerScoreSubmissionList
/** 
 * A list of score submission requests.
**/
export class PlayerScoreSubmissionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=scores", elemType: ScoreSubmission })
  scores?: ScoreSubmission[];
}
