import { SpeakeasyBase } from "../../../internal/utils";
import { MasterAuth } from "./masterauth";
export declare enum SetMasterAuthRequestActionEnum {
    Unknown = "UNKNOWN",
    SetPassword = "SET_PASSWORD",
    GeneratePassword = "GENERATE_PASSWORD",
    SetUsername = "SET_USERNAME"
}
/**
 * SetMasterAuthRequest updates the admin password of a cluster.
**/
export declare class SetMasterAuthRequest extends SpeakeasyBase {
    action?: SetMasterAuthRequestActionEnum;
    clusterId?: string;
    name?: string;
    projectId?: string;
    update?: MasterAuth;
    zone?: string;
}
