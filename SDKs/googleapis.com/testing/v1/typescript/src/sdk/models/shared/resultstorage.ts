import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudStorage } from "./googlecloudstorage";
import { ToolResultsExecution } from "./toolresultsexecution";
import { ToolResultsHistory } from "./toolresultshistory";



// ResultStorage
/** 
 * Locations where the results of running the test are stored.
**/
export class ResultStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleCloudStorage" })
  googleCloudStorage?: GoogleCloudStorage;

  @SpeakeasyMetadata({ data: "json, name=resultsUrl" })
  resultsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=toolResultsExecution" })
  toolResultsExecution?: ToolResultsExecution;

  @SpeakeasyMetadata({ data: "json, name=toolResultsHistory" })
  toolResultsHistory?: ToolResultsHistory;
}
