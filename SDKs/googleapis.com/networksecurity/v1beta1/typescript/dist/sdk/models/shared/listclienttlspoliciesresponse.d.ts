import { SpeakeasyBase } from "../../../internal/utils";
import { ClientTlsPolicy } from "./clienttlspolicy";
/**
 * Response returned by the ListClientTlsPolicies method.
**/
export declare class ListClientTlsPoliciesResponse extends SpeakeasyBase {
    clientTlsPolicies?: ClientTlsPolicy[];
    nextPageToken?: string;
}
