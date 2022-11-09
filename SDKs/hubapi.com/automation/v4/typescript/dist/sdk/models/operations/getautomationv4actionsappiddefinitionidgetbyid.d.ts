import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams extends SpeakeasyBase {
    appId: number;
    definitionId: string;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams extends SpeakeasyBase {
    archived?: boolean;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams;
    queryParams: GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams;
    security: GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    extensionActionDefinition?: shared.ExtensionActionDefinition;
    statusCode: number;
}
