import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";



// ListVariablesResponse
/** 
 * Response for the `ListVariables()` method.
**/
export class ListVariablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=variables", elemType: Variable })
  variables?: Variable[];
}
