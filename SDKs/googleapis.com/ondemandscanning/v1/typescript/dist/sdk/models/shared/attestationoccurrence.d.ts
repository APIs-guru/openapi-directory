import { SpeakeasyBase } from "../../../internal/utils";
import { Jwt } from "./jwt";
import { Signature } from "./signature";
/**
 * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
**/
export declare class AttestationOccurrence extends SpeakeasyBase {
    jwts?: Jwt[];
    serializedPayload?: string;
    signatures?: Signature[];
}
