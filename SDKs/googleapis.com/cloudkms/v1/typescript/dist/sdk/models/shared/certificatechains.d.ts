import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
**/
export declare class CertificateChains extends SpeakeasyBase {
    caviumCerts?: string[];
    googleCardCerts?: string[];
    googlePartitionCerts?: string[];
}
