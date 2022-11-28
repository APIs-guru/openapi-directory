import { SpeakeasyBase } from "../../../internal/utils";
import { LoginProfile } from "./loginprofile";
/**
 * A response message for importing an SSH public key.
**/
export declare class ImportSshPublicKeyResponse extends SpeakeasyBase {
    details?: string;
    loginProfile?: LoginProfile;
}
