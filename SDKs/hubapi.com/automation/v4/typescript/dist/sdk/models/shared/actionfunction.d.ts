import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ActionFunctionFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}
/**
 * A serverless function associated with this custom workflow action.
**/
export declare class ActionFunction extends SpeakeasyBase {
    functionSource: string;
    functionType: ActionFunctionFunctionTypeEnum;
    id?: string;
}
