import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAutomationV4ActionsAppIdCreatePathParams extends SpeakeasyBase {
    appId: number;
}
export declare class PostAutomationV4ActionsAppIdCreateSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class PostAutomationV4ActionsAppIdCreateRequest extends SpeakeasyBase {
    pathParams: PostAutomationV4ActionsAppIdCreatePathParams;
    request: shared.ExtensionActionDefinitionInput;
    security: PostAutomationV4ActionsAppIdCreateSecurity;
}
export declare class PostAutomationV4ActionsAppIdCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    extensionActionDefinition?: shared.ExtensionActionDefinition;
    statusCode: number;
}
