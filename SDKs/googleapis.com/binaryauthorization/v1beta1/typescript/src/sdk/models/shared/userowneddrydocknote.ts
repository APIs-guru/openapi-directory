import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttestorPublicKey } from "./attestorpublickey";



// UserOwnedDrydockNoteInput
/** 
 * An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
**/
export class UserOwnedDrydockNoteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=noteReference" })
  noteReference?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeys", elemType: AttestorPublicKey })
  publicKeys?: AttestorPublicKey[];
}


// UserOwnedDrydockNote
/** 
 * An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
**/
export class UserOwnedDrydockNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegationServiceAccountEmail" })
  delegationServiceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=noteReference" })
  noteReference?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeys", elemType: AttestorPublicKey })
  publicKeys?: AttestorPublicKey[];
}
