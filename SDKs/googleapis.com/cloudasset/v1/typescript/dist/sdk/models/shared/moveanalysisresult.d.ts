import { SpeakeasyBase } from "../../../internal/utils";
import { MoveImpact } from "./moveimpact";
/**
 * An analysis result including blockers and warnings.
**/
export declare class MoveAnalysisResult extends SpeakeasyBase {
    blockers?: MoveImpact[];
    warnings?: MoveImpact[];
}
