import { SpeakeasyBase } from "../../../internal/utils";
import { CertChain } from "./certchain";
/**
 * Response message for CertificateAuthorityService.FetchCaCerts.
**/
export declare class FetchCaCertsResponse extends SpeakeasyBase {
    caCerts?: CertChain[];
}
