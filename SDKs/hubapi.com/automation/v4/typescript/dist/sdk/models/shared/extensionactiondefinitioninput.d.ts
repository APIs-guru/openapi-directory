import { SpeakeasyBase } from "../../../internal/utils";
import { ActionFunction } from "./actionfunction";
import { InputFieldDefinition } from "./inputfielddefinition";
import { ActionLabels } from "./actionlabels";
import { ObjectRequestOptions } from "./objectrequestoptions";
/**
 * State of custom workflow action to be created.
**/
export declare class ExtensionActionDefinitionInput extends SpeakeasyBase {
    actionUrl: string;
    archivedAt?: number;
    functions: ActionFunction[];
    inputFieldDependencies?: any[];
    inputFields: InputFieldDefinition[];
    labels: Map<string, ActionLabels>;
    objectRequestOptions?: ObjectRequestOptions;
    objectTypes: string[];
    published: boolean;
}
