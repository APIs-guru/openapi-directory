import { SpeakeasyBase } from "../../../internal/utils";
import { UserOwnedDrydockNoteInput } from "./userowneddrydocknote";
import { UserOwnedDrydockNote } from "./userowneddrydocknote";
/**
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
export declare class AttestorInput extends SpeakeasyBase {
    description?: string;
    etag?: string;
    name?: string;
    userOwnedDrydockNote?: UserOwnedDrydockNoteInput;
}
/**
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
export declare class Attestor extends SpeakeasyBase {
    description?: string;
    etag?: string;
    name?: string;
    updateTime?: string;
    userOwnedDrydockNote?: UserOwnedDrydockNote;
}
