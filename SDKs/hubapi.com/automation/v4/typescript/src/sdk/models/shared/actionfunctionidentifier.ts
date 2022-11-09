import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ActionFunctionIdentifierFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION"
,    PreFetchOptions = "PRE_FETCH_OPTIONS"
,    PostFetchOptions = "POST_FETCH_OPTIONS"
}


// ActionFunctionIdentifier
/** 
 * A serverless function associated with this custom workflow action.
**/
export class ActionFunctionIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=functionType" })
  functionType: ActionFunctionIdentifierFunctionTypeEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
