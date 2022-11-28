import { SpeakeasyBase } from "../../../internal/utils";
import { AttestorPublicKey } from "./attestorpublickey";
/**
 * An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
**/
export declare class UserOwnedDrydockNoteInput extends SpeakeasyBase {
    noteReference?: string;
    publicKeys?: AttestorPublicKey[];
}
/**
 * An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
**/
export declare class UserOwnedDrydockNote extends SpeakeasyBase {
    delegationServiceAccountEmail?: string;
    noteReference?: string;
    publicKeys?: AttestorPublicKey[];
}
