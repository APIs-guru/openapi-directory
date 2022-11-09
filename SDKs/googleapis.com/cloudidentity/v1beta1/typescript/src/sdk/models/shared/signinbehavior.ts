import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SignInBehaviorRedirectConditionEnum {
    RedirectConditionUnspecified = "REDIRECT_CONDITION_UNSPECIFIED"
,    Never = "NEVER"
}


// SignInBehavior
/** 
 * Controls sign-in behavior.
**/
export class SignInBehavior extends SpeakeasyBase {
  @Metadata({ data: "json, name=redirectCondition" })
  redirectCondition?: SignInBehaviorRedirectConditionEnum;
}
