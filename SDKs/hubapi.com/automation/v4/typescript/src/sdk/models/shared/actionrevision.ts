import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtensionActionDefinition } from "./extensionactiondefinition";



// ActionRevision
/** 
 * A revision of this custom action.
**/
export class ActionRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition: ExtensionActionDefinition;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}
