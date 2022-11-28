import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Response of getting account information.
**/
export declare class GetAccountInfoResponse extends SpeakeasyBase {
    kind?: string;
    users?: UserInfo[];
}
