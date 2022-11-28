import { SpeakeasyBase } from "../../../internal/utils";
import { ActionFunctionIdentifier } from "./actionfunctionidentifier";
import { InputFieldDefinition } from "./inputfielddefinition";
import { ActionLabels } from "./actionlabels";
import { ObjectRequestOptions } from "./objectrequestoptions";
/**
 * Configuration for custom workflow action.
**/
export declare class ExtensionActionDefinition extends SpeakeasyBase {
    actionUrl: string;
    archivedAt?: number;
    functions: ActionFunctionIdentifier[];
    id: string;
    inputFieldDependencies?: any[];
    inputFields: InputFieldDefinition[];
    labels: Map<string, ActionLabels>;
    objectRequestOptions?: ObjectRequestOptions;
    objectTypes: string[];
    published: boolean;
    revisionId: string;
}
