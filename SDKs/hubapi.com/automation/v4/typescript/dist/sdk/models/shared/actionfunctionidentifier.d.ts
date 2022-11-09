import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ActionFunctionIdentifierFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}
/**
 * A serverless function associated with this custom workflow action.
**/
export declare class ActionFunctionIdentifier extends SpeakeasyBase {
    functionType: ActionFunctionIdentifierFunctionTypeEnum;
    id?: string;
}
