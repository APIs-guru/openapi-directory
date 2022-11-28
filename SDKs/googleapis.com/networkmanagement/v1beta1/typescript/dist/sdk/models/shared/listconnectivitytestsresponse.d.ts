import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectivityTest } from "./connectivitytest";
/**
 * Response for the `ListConnectivityTests` method.
**/
export declare class ListConnectivityTestsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resources?: ConnectivityTest[];
    unreachable?: string[];
}
