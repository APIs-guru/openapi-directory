import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
**/
export declare class Certificate extends SpeakeasyBase {
    issuer?: string;
    notAfterTime?: string;
    notBeforeTime?: string;
    parsed?: boolean;
    rawDer?: string;
    serialNumber?: string;
    sha256Fingerprint?: string;
    subject?: string;
    subjectAlternativeDnsNames?: string[];
}
/**
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
**/
export declare class CertificateInput extends SpeakeasyBase {
    rawDer?: string;
}
