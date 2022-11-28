import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ToolResultsExecution
/** 
 * Represents a tool results execution resource. This has the results of a TestMatrix.
**/
export class ToolResultsExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
