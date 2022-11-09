import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserOwnedDrydockNote } from "./userowneddrydocknote";


// Attestor
/** 
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
export class Attestor extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=userOwnedDrydockNote" })
  userOwnedDrydockNote?: UserOwnedDrydockNote;
}
