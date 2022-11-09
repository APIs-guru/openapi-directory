import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActionFunctionFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION"
,    PreFetchOptions = "PRE_FETCH_OPTIONS"
,    PostFetchOptions = "POST_FETCH_OPTIONS"
}


// ActionFunction
/** 
 * A serverless function associated with this custom workflow action.
**/
export class ActionFunction extends SpeakeasyBase {
  @Metadata({ data: "json, name=functionSource" })
  functionSource: string;

  @Metadata({ data: "json, name=functionType" })
  functionType: ActionFunctionFunctionTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
