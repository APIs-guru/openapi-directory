import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
/**
 * Authentication object.
 *
**/
export declare class ChosenScaMethod extends SpeakeasyBase {
    authenticationMethodId: string;
    authenticationType: AuthenticationTypeEnum;
    authenticationVersion?: string;
    explanation?: string;
    name?: string;
}
