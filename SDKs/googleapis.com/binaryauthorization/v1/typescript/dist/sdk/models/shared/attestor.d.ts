import { SpeakeasyBase } from "../../../internal/utils";
import { UserOwnedGrafeasNote } from "./userownedgrafeasnote";
import { UserOwnedGrafeasNoteInput } from "./userownedgrafeasnote";
/**
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
export declare class Attestor extends SpeakeasyBase {
    description?: string;
    etag?: string;
    name?: string;
    updateTime?: string;
    userOwnedGrafeasNote?: UserOwnedGrafeasNote;
}
/**
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
export declare class AttestorInput extends SpeakeasyBase {
    description?: string;
    etag?: string;
    name?: string;
    userOwnedGrafeasNote?: UserOwnedGrafeasNoteInput;
}
