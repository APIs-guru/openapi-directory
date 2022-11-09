import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GenericSignedAttestation } from "./genericsignedattestation";
import { PgpSignedAttestation } from "./pgpsignedattestation";


// Attestation
/** 
 * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).
**/
export class Attestation extends SpeakeasyBase {
  @Metadata({ data: "json, name=genericSignedAttestation" })
  genericSignedAttestation?: GenericSignedAttestation;

  @Metadata({ data: "json, name=pgpSignedAttestation" })
  pgpSignedAttestation?: PgpSignedAttestation;
}
