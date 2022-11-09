import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MoveImpact } from "./moveimpact";
import { MoveImpact } from "./moveimpact";


// MoveAnalysisResult
/** 
 * An analysis result including blockers and warnings.
**/
export class MoveAnalysisResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockers", elemType: shared.MoveImpact })
  blockers?: MoveImpact[];

  @Metadata({ data: "json, name=warnings", elemType: shared.MoveImpact })
  warnings?: MoveImpact[];
}
