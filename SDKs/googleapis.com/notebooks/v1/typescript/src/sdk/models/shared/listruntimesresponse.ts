import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Runtime } from "./runtime";



// ListRuntimesResponse
/** 
 * Response for listing Managed Notebook Runtimes.
**/
export class ListRuntimesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimes", elemType: Runtime })
  runtimes?: Runtime[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
