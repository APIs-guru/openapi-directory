import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Runtime } from "./runtime";



// ListRuntimesResponse
/** 
 * Response for the `ListRuntimes` method.
**/
export class ListRuntimesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runtimes", elemType: Runtime })
  runtimes?: Runtime[];
}
