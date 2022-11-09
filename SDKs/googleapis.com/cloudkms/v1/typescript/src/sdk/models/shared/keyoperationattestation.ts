import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateChains } from "./certificatechains";

export enum KeyOperationAttestationFormatEnum {
    AttestationFormatUnspecified = "ATTESTATION_FORMAT_UNSPECIFIED"
,    CaviumV1Compressed = "CAVIUM_V1_COMPRESSED"
,    CaviumV2Compressed = "CAVIUM_V2_COMPRESSED"
}


// KeyOperationAttestation
/** 
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
**/
export class KeyOperationAttestation extends SpeakeasyBase {
  @Metadata({ data: "json, name=certChains" })
  certChains?: CertificateChains;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=format" })
  format?: KeyOperationAttestationFormatEnum;
}
