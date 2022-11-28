import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoToken } from "./enterprisecrmeventbusprototoken";
/**
 * Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes.
**/
export declare class EnterpriseCrmEventbusProtoAddress extends SpeakeasyBase {
    email?: string;
    name?: string;
    tokens?: EnterpriseCrmEventbusProtoToken[];
}
