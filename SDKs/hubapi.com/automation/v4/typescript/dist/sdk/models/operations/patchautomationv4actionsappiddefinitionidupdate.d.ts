import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams extends SpeakeasyBase {
    appId: number;
    definitionId: string;
}
export declare class PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest extends SpeakeasyBase {
    pathParams: PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams;
    request: shared.ExtensionActionDefinitionPatch;
    security: PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity;
}
export declare class PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    extensionActionDefinition?: shared.ExtensionActionDefinition;
    statusCode: number;
}
