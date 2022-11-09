import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Runtime } from "./runtime";


// ListRuntimesResponse
/** 
 * Response for the `ListRuntimes` method.
**/
export class ListRuntimesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=runtimes", elemType: shared.Runtime })
  runtimes?: Runtime[];
}
