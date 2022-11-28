import { SpeakeasyBase } from "../../../internal/utils";
import { ExtensionActionDefinition } from "./extensionactiondefinition";
/**
 * A revision of this custom action.
**/
export declare class ActionRevision extends SpeakeasyBase {
    createdAt: Date;
    definition: ExtensionActionDefinition;
    id: string;
    revisionId: string;
}
