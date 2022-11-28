import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateChains } from "./certificatechains";


export enum KeyOperationAttestationFormatEnum {
    AttestationFormatUnspecified = "ATTESTATION_FORMAT_UNSPECIFIED",
    CaviumV1Compressed = "CAVIUM_V1_COMPRESSED",
    CaviumV2Compressed = "CAVIUM_V2_COMPRESSED"
}


// KeyOperationAttestationInput
/** 
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
**/
export class KeyOperationAttestationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certChains" })
  certChains?: CertificateChains;
}


// KeyOperationAttestation
/** 
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
**/
export class KeyOperationAttestation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certChains" })
  certChains?: CertificateChains;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: KeyOperationAttestationFormatEnum;
}
