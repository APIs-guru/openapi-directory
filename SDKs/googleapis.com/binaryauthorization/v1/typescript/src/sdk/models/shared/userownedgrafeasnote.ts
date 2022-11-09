import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttestorPublicKey } from "./attestorpublickey";


// UserOwnedGrafeasNote
/** 
 * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
**/
export class UserOwnedGrafeasNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegationServiceAccountEmail" })
  delegationServiceAccountEmail?: string;

  @Metadata({ data: "json, name=noteReference" })
  noteReference?: string;

  @Metadata({ data: "json, name=publicKeys", elemType: shared.AttestorPublicKey })
  publicKeys?: AttestorPublicKey[];
}
