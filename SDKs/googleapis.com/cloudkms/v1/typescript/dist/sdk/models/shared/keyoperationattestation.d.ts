import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateChains } from "./certificatechains";
export declare enum KeyOperationAttestationFormatEnum {
    AttestationFormatUnspecified = "ATTESTATION_FORMAT_UNSPECIFIED",
    CaviumV1Compressed = "CAVIUM_V1_COMPRESSED",
    CaviumV2Compressed = "CAVIUM_V2_COMPRESSED"
}
/**
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
**/
export declare class KeyOperationAttestationInput extends SpeakeasyBase {
    certChains?: CertificateChains;
}
/**
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
**/
export declare class KeyOperationAttestation extends SpeakeasyBase {
    certChains?: CertificateChains;
    content?: string;
    format?: KeyOperationAttestationFormatEnum;
}
