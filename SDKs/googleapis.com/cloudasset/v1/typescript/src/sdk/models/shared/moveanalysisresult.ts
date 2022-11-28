import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MoveImpact } from "./moveimpact";



// MoveAnalysisResult
/** 
 * An analysis result including blockers and warnings.
**/
export class MoveAnalysisResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockers", elemType: MoveImpact })
  blockers?: MoveImpact[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: MoveImpact })
  warnings?: MoveImpact[];
}
