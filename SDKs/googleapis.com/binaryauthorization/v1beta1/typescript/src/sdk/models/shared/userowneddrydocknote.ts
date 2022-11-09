import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttestorPublicKey } from "./attestorpublickey";


// UserOwnedDrydockNote
/** 
 * An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
**/
export class UserOwnedDrydockNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegationServiceAccountEmail" })
  delegationServiceAccountEmail?: string;

  @Metadata({ data: "json, name=noteReference" })
  noteReference?: string;

  @Metadata({ data: "json, name=publicKeys", elemType: shared.AttestorPublicKey })
  publicKeys?: AttestorPublicKey[];
}
