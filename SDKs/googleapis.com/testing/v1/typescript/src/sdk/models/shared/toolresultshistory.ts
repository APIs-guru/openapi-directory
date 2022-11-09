import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ToolResultsHistory
/** 
 * Represents a tool results history resource.
**/
export class ToolResultsHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
