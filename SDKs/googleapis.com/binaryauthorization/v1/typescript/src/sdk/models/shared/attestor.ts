import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserOwnedGrafeasNote } from "./userownedgrafeasnote";
import { UserOwnedGrafeasNoteInput } from "./userownedgrafeasnote";



// Attestor
/** 
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
export class Attestor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userOwnedGrafeasNote" })
  userOwnedGrafeasNote?: UserOwnedGrafeasNote;
}


// AttestorInput
/** 
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
export class AttestorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=userOwnedGrafeasNote" })
  userOwnedGrafeasNote?: UserOwnedGrafeasNoteInput;
}
