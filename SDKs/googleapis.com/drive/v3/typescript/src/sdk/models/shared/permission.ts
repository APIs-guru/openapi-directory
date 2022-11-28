import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PermissionPermissionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inherited" })
  inherited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inheritedFrom" })
  inheritedFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionType" })
  permissionType?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}


export class PermissionTeamDrivePermissionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inherited" })
  inherited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inheritedFrom" })
  inheritedFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=teamDrivePermissionType" })
  teamDrivePermissionType?: string;
}


// Permission
/** 
 * A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
**/
export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowFileDiscovery" })
  allowFileDiscovery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingOwner" })
  pendingOwner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=permissionDetails", elemType: PermissionPermissionDetails })
  permissionDetails?: PermissionPermissionDetails[];

  @SpeakeasyMetadata({ data: "json, name=photoLink" })
  photoLink?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=teamDrivePermissionDetails", elemType: PermissionTeamDrivePermissionDetails })
  teamDrivePermissionDetails?: PermissionTeamDrivePermissionDetails[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: string;
}


// PermissionInput
/** 
 * A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
**/
export class PermissionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowFileDiscovery" })
  allowFileDiscovery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationTime" })
  expirationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingOwner" })
  pendingOwner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=photoLink" })
  photoLink?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: string;
}
