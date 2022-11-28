import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateIssuanceConfig } from "./certificateissuanceconfig";
/**
 * Response for the `ListCertificateIssuanceConfigs` method.
**/
export declare class ListCertificateIssuanceConfigsResponse extends SpeakeasyBase {
    certificateIssuanceConfigs?: CertificateIssuanceConfig[];
    nextPageToken?: string;
    unreachable?: string[];
}
