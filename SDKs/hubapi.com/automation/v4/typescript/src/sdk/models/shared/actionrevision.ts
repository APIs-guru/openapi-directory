import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExtensionActionDefinition } from "./extensionactiondefinition";


// ActionRevision
/** 
 * A revision of this custom action.
**/
export class ActionRevision extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=definition" })
  definition: ExtensionActionDefinition;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId: string;
}
