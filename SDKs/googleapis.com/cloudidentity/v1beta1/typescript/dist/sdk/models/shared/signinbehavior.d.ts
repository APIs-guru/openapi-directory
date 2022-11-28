import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SignInBehaviorRedirectConditionEnum {
    RedirectConditionUnspecified = "REDIRECT_CONDITION_UNSPECIFIED",
    Never = "NEVER"
}
/**
 * Controls sign-in behavior.
**/
export declare class SignInBehavior extends SpeakeasyBase {
    redirectCondition?: SignInBehaviorRedirectConditionEnum;
}
