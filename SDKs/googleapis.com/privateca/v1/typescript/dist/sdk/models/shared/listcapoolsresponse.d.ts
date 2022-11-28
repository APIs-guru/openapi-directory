import { SpeakeasyBase } from "../../../internal/utils";
import { CaPool } from "./capool";
/**
 * Response message for CertificateAuthorityService.ListCaPools.
**/
export declare class ListCaPoolsResponse extends SpeakeasyBase {
    caPools?: CaPool[];
    nextPageToken?: string;
    unreachable?: string[];
}
