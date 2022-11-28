import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ToolResultsHistory
/** 
 * Represents a tool results history resource.
**/
export class ToolResultsHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
