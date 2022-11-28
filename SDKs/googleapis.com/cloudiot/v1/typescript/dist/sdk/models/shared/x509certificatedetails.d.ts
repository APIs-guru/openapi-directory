import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of an X.509 certificate. For informational purposes only.
**/
export declare class X509CertificateDetails extends SpeakeasyBase {
    expiryTime?: string;
    issuer?: string;
    publicKeyType?: string;
    signatureAlgorithm?: string;
    startTime?: string;
    subject?: string;
}
