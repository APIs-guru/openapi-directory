import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudStorage } from "./googlecloudstorage";
import { ToolResultsExecution } from "./toolresultsexecution";
import { ToolResultsHistory } from "./toolresultshistory";


// ResultStorage
/** 
 * Locations where the results of running the test are stored.
**/
export class ResultStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleCloudStorage" })
  googleCloudStorage?: GoogleCloudStorage;

  @Metadata({ data: "json, name=resultsUrl" })
  resultsUrl?: string;

  @Metadata({ data: "json, name=toolResultsExecution" })
  toolResultsExecution?: ToolResultsExecution;

  @Metadata({ data: "json, name=toolResultsHistory" })
  toolResultsHistory?: ToolResultsHistory;
}
