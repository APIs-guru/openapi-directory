import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ToolResultsStep
/** 
 * Represents a tool results step resource. This has the results of a TestExecution.
**/
export class ToolResultsStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=stepId" })
  stepId?: string;
}
