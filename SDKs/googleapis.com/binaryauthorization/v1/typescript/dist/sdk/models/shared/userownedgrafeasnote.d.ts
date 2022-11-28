import { SpeakeasyBase } from "../../../internal/utils";
import { AttestorPublicKey } from "./attestorpublickey";
/**
 * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
**/
export declare class UserOwnedGrafeasNoteInput extends SpeakeasyBase {
    noteReference?: string;
    publicKeys?: AttestorPublicKey[];
}
/**
 * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
**/
export declare class UserOwnedGrafeasNote extends SpeakeasyBase {
    delegationServiceAccountEmail?: string;
    noteReference?: string;
    publicKeys?: AttestorPublicKey[];
}
