import { SpeakeasyBase } from "../../../internal/utils";
import { Secret } from "./secret";
/**
 * Parameters to support Username and Password Authentication.
**/
export declare class UserPassword extends SpeakeasyBase {
    password?: Secret;
    username?: string;
}
