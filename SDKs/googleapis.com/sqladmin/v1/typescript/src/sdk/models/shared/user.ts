import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPasswordValidationPolicy } from "./userpasswordvalidationpolicy";
import { SqlServerUserDetails } from "./sqlserveruserdetails";


export enum UserDualPasswordTypeEnum {
    DualPasswordTypeUnspecified = "DUAL_PASSWORD_TYPE_UNSPECIFIED",
    NoModifyDualPassword = "NO_MODIFY_DUAL_PASSWORD",
    NoDualPassword = "NO_DUAL_PASSWORD",
    DualPassword = "DUAL_PASSWORD"
}

export enum UserTypeEnum {
    BuiltIn = "BUILT_IN",
    CloudIamUser = "CLOUD_IAM_USER",
    CloudIamServiceAccount = "CLOUD_IAM_SERVICE_ACCOUNT"
}


// User
/** 
 * A Cloud SQL user resource.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dualPasswordType" })
  dualPasswordType?: UserDualPasswordTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordPolicy" })
  passwordPolicy?: UserPasswordValidationPolicy;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlserverUserDetails" })
  sqlserverUserDetails?: SqlServerUserDetails;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserTypeEnum;
}
