import { SpeakeasyBase } from "../../../internal/utils";
import { ForgotPasswordActionEnum } from "./forgotpasswordactionenum";
export declare class ForgotPasswordResult extends SpeakeasyBase {
    action?: ForgotPasswordActionEnum;
    pinExpirationDate?: Date;
    pinFile?: string;
}
