import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServerTlsPolicy } from "./servertlspolicy";
/**
 * Response returned by the ListServerTlsPolicies method.
**/
export declare class ListServerTlsPoliciesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    serverTlsPolicies?: ServerTlsPolicy[];
}
