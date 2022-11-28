import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypePathParams extends SpeakeasyBase {
    appId: number;
    definitionId: string;
    functionType: GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest extends SpeakeasyBase {
    pathParams: GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypePathParams;
    security: GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity;
}
export declare class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeResponse extends SpeakeasyBase {
    actionFunction?: shared.ActionFunction;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
