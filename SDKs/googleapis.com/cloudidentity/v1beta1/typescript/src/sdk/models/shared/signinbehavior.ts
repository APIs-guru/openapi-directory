import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SignInBehaviorRedirectConditionEnum {
    RedirectConditionUnspecified = "REDIRECT_CONDITION_UNSPECIFIED",
    Never = "NEVER"
}


// SignInBehavior
/** 
 * Controls sign-in behavior.
**/
export class SignInBehavior extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=redirectCondition" })
  redirectCondition?: SignInBehaviorRedirectConditionEnum;
}
