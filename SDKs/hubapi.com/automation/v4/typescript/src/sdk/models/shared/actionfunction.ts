import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActionFunctionFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}


// ActionFunction
/** 
 * A serverless function associated with this custom workflow action.
**/
export class ActionFunction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functionSource" })
  functionSource: string;

  @SpeakeasyMetadata({ data: "json, name=functionType" })
  functionType: ActionFunctionFunctionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
