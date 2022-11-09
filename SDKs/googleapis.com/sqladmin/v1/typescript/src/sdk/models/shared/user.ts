import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserPasswordValidationPolicy } from "./userpasswordvalidationpolicy";
import { SqlServerUserDetails } from "./sqlserveruserdetails";

export enum UserDualPasswordTypeEnum {
    DualPasswordTypeUnspecified = "DUAL_PASSWORD_TYPE_UNSPECIFIED"
,    NoModifyDualPassword = "NO_MODIFY_DUAL_PASSWORD"
,    NoDualPassword = "NO_DUAL_PASSWORD"
,    DualPassword = "DUAL_PASSWORD"
}

export enum UserTypeEnum {
    BuiltIn = "BUILT_IN"
,    CloudIamUser = "CLOUD_IAM_USER"
,    CloudIamServiceAccount = "CLOUD_IAM_SERVICE_ACCOUNT"
}


// User
/** 
 * A Cloud SQL user resource.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=dualPasswordType" })
  dualPasswordType?: UserDualPasswordTypeEnum;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=passwordPolicy" })
  passwordPolicy?: UserPasswordValidationPolicy;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=sqlserverUserDetails" })
  sqlserverUserDetails?: SqlServerUserDetails;

  @Metadata({ data: "json, name=type" })
  type?: UserTypeEnum;
}
