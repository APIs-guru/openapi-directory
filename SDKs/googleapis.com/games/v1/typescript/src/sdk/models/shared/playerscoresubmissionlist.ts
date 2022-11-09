import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScoreSubmission } from "./scoresubmission";


// PlayerScoreSubmissionList
/** 
 * A list of score submission requests.
**/
export class PlayerScoreSubmissionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=scores", elemType: shared.ScoreSubmission })
  scores?: ScoreSubmission[];
}
