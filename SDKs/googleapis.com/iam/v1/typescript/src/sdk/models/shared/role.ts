import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RoleStageEnum {
    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
,    Disabled = "DISABLED"
,    Eap = "EAP"
}


// Role
/** 
 * A role in the Identity and Access Management API.
**/
export class Role extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=includedPermissions" })
  includedPermissions?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=stage" })
  stage?: RoleStageEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
