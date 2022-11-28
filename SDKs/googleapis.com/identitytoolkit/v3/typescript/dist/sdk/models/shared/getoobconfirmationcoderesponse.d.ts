import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of getting a code for user confirmation (reset password, change email etc.).
**/
export declare class GetOobConfirmationCodeResponse extends SpeakeasyBase {
    email?: string;
    kind?: string;
    oobCode?: string;
}
