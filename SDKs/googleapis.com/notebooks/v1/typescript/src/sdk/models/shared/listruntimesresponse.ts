import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Runtime } from "./runtime";


// ListRuntimesResponse
/** 
 * Response for listing Managed Notebook Runtimes.
**/
export class ListRuntimesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=runtimes", elemType: shared.Runtime })
  runtimes?: Runtime[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
