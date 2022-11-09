import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MatterPermissionRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    Collaborator = "COLLABORATOR"
,    Owner = "OWNER"
}


// MatterPermission
/** 
 * Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.
**/
export class MatterPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=role" })
  role?: MatterPermissionRoleEnum;
}
