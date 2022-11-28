import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PermissionPermissionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalRoles" })
  additionalRoles?: string[];

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
  @SpeakeasyMetadata({ data: "json, name=additionalRoles" })
  additionalRoles?: string[];

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
 * A permission for a file.
**/
export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalRoles" })
  additionalRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=authKey" })
  authKey?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingOwner" })
  pendingOwner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=permissionDetails", elemType: PermissionPermissionDetails })
  permissionDetails?: PermissionPermissionDetails[];

  @SpeakeasyMetadata({ data: "json, name=photoLink" })
  photoLink?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=teamDrivePermissionDetails", elemType: PermissionTeamDrivePermissionDetails })
  teamDrivePermissionDetails?: PermissionTeamDrivePermissionDetails[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: string;

  @SpeakeasyMetadata({ data: "json, name=withLink" })
  withLink?: boolean;
}


// PermissionInput
/** 
 * A permission for a file.
**/
export class PermissionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalRoles" })
  additionalRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=authKey" })
  authKey?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingOwner" })
  pendingOwner?: boolean;

  @SpeakeasyMetadata({ data: "json, name=photoLink" })
  photoLink?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: string;

  @SpeakeasyMetadata({ data: "json, name=withLink" })
  withLink?: boolean;
}
