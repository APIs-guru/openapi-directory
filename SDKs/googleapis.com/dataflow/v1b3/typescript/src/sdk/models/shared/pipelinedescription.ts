import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DisplayData } from "./displaydata";
import { ExecutionStageSummary } from "./executionstagesummary";
import { TransformSummary } from "./transformsummary";


// PipelineDescription
/** 
 * A descriptive representation of submitted pipeline as well as the executed form. This data is provided by the Dataflow service for ease of visualizing the pipeline and interpreting Dataflow provided metrics.
**/
export class PipelineDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayData", elemType: shared.DisplayData })
  displayData?: DisplayData[];

  @Metadata({ data: "json, name=executionPipelineStage", elemType: shared.ExecutionStageSummary })
  executionPipelineStage?: ExecutionStageSummary[];

  @Metadata({ data: "json, name=originalPipelineTransform", elemType: shared.TransformSummary })
  originalPipelineTransform?: TransformSummary[];

  @Metadata({ data: "json, name=stepNamesHash" })
  stepNamesHash?: string;
}
