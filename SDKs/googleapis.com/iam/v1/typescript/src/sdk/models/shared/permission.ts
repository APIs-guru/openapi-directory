import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PermissionCustomRolesSupportLevelEnum {
    Supported = "SUPPORTED"
,    Testing = "TESTING"
,    NotSupported = "NOT_SUPPORTED"
}

export enum PermissionStageEnum {
    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// Permission
/** 
 * A permission which can be included by a role.
**/
export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiDisabled" })
  apiDisabled?: boolean;

  @Metadata({ data: "json, name=customRolesSupportLevel" })
  customRolesSupportLevel?: PermissionCustomRolesSupportLevelEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=onlyInPredefinedRoles" })
  onlyInPredefinedRoles?: boolean;

  @Metadata({ data: "json, name=primaryPermission" })
  primaryPermission?: string;

  @Metadata({ data: "json, name=stage" })
  stage?: PermissionStageEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
