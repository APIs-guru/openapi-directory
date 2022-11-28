import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayData } from "./displaydata";
import { ExecutionStageSummary } from "./executionstagesummary";
import { TransformSummary } from "./transformsummary";
/**
 * A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.
**/
export declare class PipelineDescription extends SpeakeasyBase {
    displayData?: DisplayData[];
    executionPipelineStage?: ExecutionStageSummary[];
    originalPipelineTransform?: TransformSummary[];
    stepNamesHash?: string;
}
