import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RoleStageEnum {
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED",
    Disabled = "DISABLED",
    Eap = "EAP"
}


// Role
/** 
 * A role in the Identity and Access Management API.
**/
export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=includedPermissions" })
  includedPermissions?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=stage" })
  stage?: RoleStageEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
