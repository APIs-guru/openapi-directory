import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Variable } from "./variable";



// ListVariablesResponse
/** 
 * List Variables Response.
**/
export class ListVariablesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=variables", elemType: Variable })
  variables?: Variable[];
}
