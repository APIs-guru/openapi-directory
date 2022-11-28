import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ActionFunctionIdentifierFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}


// ActionFunctionIdentifier
/** 
 * A serverless function associated with this custom workflow action.
**/
export class ActionFunctionIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=functionType" })
  functionType: ActionFunctionIdentifierFunctionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
