import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PermissionPermissionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalRoles" })
  additionalRoles?: string[];

  @Metadata({ data: "json, name=inherited" })
  inherited?: boolean;

  @Metadata({ data: "json, name=inheritedFrom" })
  inheritedFrom?: string;

  @Metadata({ data: "json, name=permissionType" })
  permissionType?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}


export class PermissionTeamDrivePermissionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalRoles" })
  additionalRoles?: string[];

  @Metadata({ data: "json, name=inherited" })
  inherited?: boolean;

  @Metadata({ data: "json, name=inheritedFrom" })
  inheritedFrom?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=teamDrivePermissionType" })
  teamDrivePermissionType?: string;
}


// Permission
/** 
 * A permission for a file.
**/
export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalRoles" })
  additionalRoles?: string[];

  @Metadata({ data: "json, name=authKey" })
  authKey?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pendingOwner" })
  pendingOwner?: boolean;

  @Metadata({ data: "json, name=permissionDetails", elemType: shared.PermissionPermissionDetails })
  permissionDetails?: PermissionPermissionDetails[];

  @Metadata({ data: "json, name=photoLink" })
  photoLink?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=teamDrivePermissionDetails", elemType: shared.PermissionTeamDrivePermissionDetails })
  teamDrivePermissionDetails?: PermissionTeamDrivePermissionDetails[];

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=view" })
  view?: string;

  @Metadata({ data: "json, name=withLink" })
  withLink?: boolean;
}
