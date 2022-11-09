import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Domain } from "./domain";
import { Group } from "./group";
import { User } from "./user";

export enum PermissionRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    Owner = "OWNER"
,    Organizer = "ORGANIZER"
,    FileOrganizer = "FILE_ORGANIZER"
,    Editor = "EDITOR"
,    Commenter = "COMMENTER"
,    Viewer = "VIEWER"
,    PublishedViewer = "PUBLISHED_VIEWER"
}


// Permission
/** 
 * The permission setting of an object.
**/
export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowDiscovery" })
  allowDiscovery?: boolean;

  @Metadata({ data: "json, name=anyone" })
  anyone?: Map<string, any>;

  @Metadata({ data: "json, name=domain" })
  domain?: Domain;

  @Metadata({ data: "json, name=group" })
  group?: Group;

  @Metadata({ data: "json, name=role" })
  role?: PermissionRoleEnum;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
