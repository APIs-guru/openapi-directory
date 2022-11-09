import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectivityTest } from "./connectivitytest";


// ListConnectivityTestsResponse
/** 
 * Response for the `ListConnectivityTests` method.
**/
export class ListConnectivityTestsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.ConnectivityTest })
  resources?: ConnectivityTest[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
