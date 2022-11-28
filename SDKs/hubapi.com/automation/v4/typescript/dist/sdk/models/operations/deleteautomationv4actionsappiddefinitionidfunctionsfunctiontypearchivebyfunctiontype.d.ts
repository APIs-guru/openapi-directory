import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypePathParams extends SpeakeasyBase {
    appId: number;
    definitionId: string;
    functionType: DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum;
}
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest extends SpeakeasyBase {
    pathParams: DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypePathParams;
    security: DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeSecurity;
}
export declare class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
