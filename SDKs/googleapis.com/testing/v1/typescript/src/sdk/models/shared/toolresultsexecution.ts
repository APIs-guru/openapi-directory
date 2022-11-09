import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ToolResultsExecution
/** 
 * Represents a tool results execution resource. This has the results of a TestMatrix.
**/
export class ToolResultsExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
