import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
import { Group } from "./group";
import { User } from "./user";
export declare enum PermissionRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    Owner = "OWNER",
    Organizer = "ORGANIZER",
    FileOrganizer = "FILE_ORGANIZER",
    Editor = "EDITOR",
    Commenter = "COMMENTER",
    Viewer = "VIEWER",
    PublishedViewer = "PUBLISHED_VIEWER"
}
/**
 * The permission setting of an object.
**/
export declare class Permission extends SpeakeasyBase {
    allowDiscovery?: boolean;
    anyone?: Map<string, any>;
    domain?: Domain;
    group?: Group;
    role?: PermissionRoleEnum;
    user?: User;
}
