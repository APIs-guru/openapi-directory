import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Variable } from "./variable";


// ListVariablesResponse
/** 
 * List Variables Response.
**/
export class ListVariablesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=variables", elemType: shared.Variable })
  variables?: Variable[];
}
