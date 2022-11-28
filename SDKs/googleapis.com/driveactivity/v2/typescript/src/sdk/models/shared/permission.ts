import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
import { Group } from "./group";
import { User } from "./user";


export enum PermissionRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    Owner = "OWNER",
    Organizer = "ORGANIZER",
    FileOrganizer = "FILE_ORGANIZER",
    Editor = "EDITOR",
    Commenter = "COMMENTER",
    Viewer = "VIEWER",
    PublishedViewer = "PUBLISHED_VIEWER"
}


// Permission
/** 
 * The permission setting of an object.
**/
export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowDiscovery" })
  allowDiscovery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=anyone" })
  anyone?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: Domain;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: Group;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: PermissionRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
