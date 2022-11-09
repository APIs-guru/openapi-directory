import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Variable } from "./variable";


// ListVariablesResponse
/** 
 * Response for the `ListVariables()` method.
**/
export class ListVariablesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=variables", elemType: shared.Variable })
  variables?: Variable[];
}
