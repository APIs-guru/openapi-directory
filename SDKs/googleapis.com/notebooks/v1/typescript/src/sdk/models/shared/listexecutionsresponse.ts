import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";



// ListExecutionsResponse
/** 
 * Response for listing scheduled notebook executions
**/
export class ListExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executions", elemType: Execution })
  executions?: Execution[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
