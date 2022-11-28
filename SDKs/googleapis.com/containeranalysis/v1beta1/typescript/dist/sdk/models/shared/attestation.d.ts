import { SpeakeasyBase } from "../../../internal/utils";
import { GenericSignedAttestation } from "./genericsignedattestation";
import { PgpSignedAttestation } from "./pgpsignedattestation";
/**
 * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).
**/
export declare class Attestation extends SpeakeasyBase {
    genericSignedAttestation?: GenericSignedAttestation;
    pgpSignedAttestation?: PgpSignedAttestation;
}
