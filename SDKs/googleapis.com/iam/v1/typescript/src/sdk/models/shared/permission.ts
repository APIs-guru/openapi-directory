import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PermissionCustomRolesSupportLevelEnum {
    Supported = "SUPPORTED",
    Testing = "TESTING",
    NotSupported = "NOT_SUPPORTED"
}

export enum PermissionStageEnum {
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// Permission
/** 
 * A permission which can be included by a role.
**/
export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiDisabled" })
  apiDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=customRolesSupportLevel" })
  customRolesSupportLevel?: PermissionCustomRolesSupportLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onlyInPredefinedRoles" })
  onlyInPredefinedRoles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=primaryPermission" })
  primaryPermission?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: PermissionStageEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
