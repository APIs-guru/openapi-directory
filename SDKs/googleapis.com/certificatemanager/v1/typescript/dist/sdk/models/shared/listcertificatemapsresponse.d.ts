import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateMap } from "./certificatemap";
/**
 * Response for the `ListCertificateMaps` method.
**/
export declare class ListCertificateMapsResponse extends SpeakeasyBase {
    certificateMaps?: CertificateMap[];
    nextPageToken?: string;
    unreachable?: string[];
}
