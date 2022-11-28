import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams extends SpeakeasyBase {
    appId: number;
    definitionId: string;
    functionId: string;
    functionType: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum;
}
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest extends SpeakeasyBase {
    pathParams: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams;
    request: string;
    security: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity;
}
export declare class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse extends SpeakeasyBase {
    actionFunctionIdentifier?: shared.ActionFunctionIdentifier;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
