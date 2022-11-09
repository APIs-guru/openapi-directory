import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ToolResultsStep
/** 
 * Represents a tool results step resource. This has the results of a TestExecution.
**/
export class ToolResultsStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=stepId" })
  stepId?: string;
}
