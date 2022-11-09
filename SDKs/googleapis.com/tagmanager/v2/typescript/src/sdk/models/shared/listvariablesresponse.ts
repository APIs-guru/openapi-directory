import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Variable } from "./variable";


// ListVariablesResponse
/** 
 * List Variables Response.
**/
export class ListVariablesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=variable", elemType: shared.Variable })
  variable?: Variable[];
}
