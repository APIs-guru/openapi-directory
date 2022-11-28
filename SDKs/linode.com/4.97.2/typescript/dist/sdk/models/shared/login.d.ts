import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing a previous successful login for a User.
 *
**/
export declare class Login extends SpeakeasyBase {
    datetime?: Date;
    id?: number;
    ip?: string;
    restricted?: boolean;
    username?: string;
}
