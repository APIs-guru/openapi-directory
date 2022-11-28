import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttestorPublicKey } from "./attestorpublickey";



// UserOwnedGrafeasNoteInput
/** 
 * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
**/
export class UserOwnedGrafeasNoteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=noteReference" })
  noteReference?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeys", elemType: AttestorPublicKey })
  publicKeys?: AttestorPublicKey[];
}


// UserOwnedGrafeasNote
/** 
 * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
**/
export class UserOwnedGrafeasNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegationServiceAccountEmail" })
  delegationServiceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=noteReference" })
  noteReference?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeys", elemType: AttestorPublicKey })
  publicKeys?: AttestorPublicKey[];
}
