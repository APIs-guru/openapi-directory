import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectivityTest } from "./connectivitytest";



// ListConnectivityTestsResponse
/** 
 * Response for the `ListConnectivityTests` method.
**/
export class ListConnectivityTestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ConnectivityTest })
  resources?: ConnectivityTest[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
