import { SpeakeasyBase } from "../../../internal/utils";
import { UserPasswordValidationPolicy } from "./userpasswordvalidationpolicy";
import { SqlServerUserDetails } from "./sqlserveruserdetails";
export declare enum UserDualPasswordTypeEnum {
    DualPasswordTypeUnspecified = "DUAL_PASSWORD_TYPE_UNSPECIFIED",
    NoModifyDualPassword = "NO_MODIFY_DUAL_PASSWORD",
    NoDualPassword = "NO_DUAL_PASSWORD",
    DualPassword = "DUAL_PASSWORD"
}
export declare enum UserTypeEnum {
    BuiltIn = "BUILT_IN",
    CloudIamUser = "CLOUD_IAM_USER",
    CloudIamServiceAccount = "CLOUD_IAM_SERVICE_ACCOUNT"
}
/**
 * A Cloud SQL user resource.
**/
export declare class User extends SpeakeasyBase {
    dualPasswordType?: UserDualPasswordTypeEnum;
    etag?: string;
    host?: string;
    instance?: string;
    kind?: string;
    name?: string;
    password?: string;
    passwordPolicy?: UserPasswordValidationPolicy;
    project?: string;
    sqlserverUserDetails?: SqlServerUserDetails;
    type?: UserTypeEnum;
}
