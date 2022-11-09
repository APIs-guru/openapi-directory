import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InputFieldDefinition } from "./inputfielddefinition";
import { ActionLabels } from "./actionlabels";
import { ObjectRequestOptions } from "./objectrequestoptions";
/**
 * Fields on custom workflow action to be updated.
**/
export declare class ExtensionActionDefinitionPatch extends SpeakeasyBase {
    actionUrl?: string;
    inputFieldDependencies?: any[];
    inputFields?: InputFieldDefinition[];
    labels?: Map<string, ActionLabels>;
    objectRequestOptions?: ObjectRequestOptions;
    objectTypes?: string[];
    published?: boolean;
}
