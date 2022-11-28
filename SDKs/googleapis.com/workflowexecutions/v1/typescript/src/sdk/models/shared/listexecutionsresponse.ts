import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";



// ListExecutionsResponse
/** 
 * Response for the ListExecutions method.
**/
export class ListExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executions", elemType: Execution })
  executions?: Execution[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
