import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Execution } from "./execution";


// ListExecutionsResponse
/** 
 * Response for the ListExecutions method.
**/
export class ListExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executions", elemType: shared.Execution })
  executions?: Execution[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
