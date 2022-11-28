import { SpeakeasyBase } from "../../../internal/utils";
import { RevokedCertificate } from "./revokedcertificate";
export declare enum CertificateRevocationListStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Superseded = "SUPERSEDED"
}
/**
 * A CertificateRevocationList corresponds to a signed X.509 certificate Revocation List (CRL). A CRL contains the serial numbers of certificates that should no longer be trusted.
**/
export declare class CertificateRevocationList extends SpeakeasyBase {
    accessUrl?: string;
    createTime?: string;
    labels?: Map<string, string>;
    name?: string;
    pemCrl?: string;
    revokedCertificates?: RevokedCertificate[];
    sequenceNumber?: string;
    state?: CertificateRevocationListStateEnum;
    updateTime?: string;
}
