import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisplayData } from "./displaydata";
import { ExecutionStageSummary } from "./executionstagesummary";
import { TransformSummary } from "./transformsummary";



// PipelineDescription
/** 
 * A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.
**/
export class PipelineDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayData", elemType: DisplayData })
  displayData?: DisplayData[];

  @SpeakeasyMetadata({ data: "json, name=executionPipelineStage", elemType: ExecutionStageSummary })
  executionPipelineStage?: ExecutionStageSummary[];

  @SpeakeasyMetadata({ data: "json, name=originalPipelineTransform", elemType: TransformSummary })
  originalPipelineTransform?: TransformSummary[];

  @SpeakeasyMetadata({ data: "json, name=stepNamesHash" })
  stepNamesHash?: string;
}
