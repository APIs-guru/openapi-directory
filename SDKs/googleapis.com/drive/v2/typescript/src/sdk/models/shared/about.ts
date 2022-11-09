import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";


export class AboutAdditionalRoleInfoRoleSets extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalRoles" })
  additionalRoles?: string[];

  @Metadata({ data: "json, name=primaryRole" })
  primaryRole?: string;
}


export class AboutAdditionalRoleInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=roleSets", elemType: shared.AboutAdditionalRoleInfoRoleSets })
  roleSets?: AboutAdditionalRoleInfoRoleSets[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AboutDriveThemes extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @Metadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class AboutExportFormats extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=targets" })
  targets?: string[];
}


export class AboutFeatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=featureName" })
  featureName?: string;

  @Metadata({ data: "json, name=featureRate" })
  featureRate?: number;
}


export class AboutImportFormats extends SpeakeasyBase {
  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=targets" })
  targets?: string[];
}


export class AboutMaxUploadSizes extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AboutQuotaBytesByService extends SpeakeasyBase {
  @Metadata({ data: "json, name=bytesUsed" })
  bytesUsed?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}


export class AboutTeamDriveThemes extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @Metadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}


// About
/** 
 * An item with user information and settings.
**/
export class About extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalRoleInfo", elemType: shared.AboutAdditionalRoleInfo })
  additionalRoleInfo?: AboutAdditionalRoleInfo[];

  @Metadata({ data: "json, name=canCreateDrives" })
  canCreateDrives?: boolean;

  @Metadata({ data: "json, name=canCreateTeamDrives" })
  canCreateTeamDrives?: boolean;

  @Metadata({ data: "json, name=domainSharingPolicy" })
  domainSharingPolicy?: string;

  @Metadata({ data: "json, name=driveThemes", elemType: shared.AboutDriveThemes })
  driveThemes?: AboutDriveThemes[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=exportFormats", elemType: shared.AboutExportFormats })
  exportFormats?: AboutExportFormats[];

  @Metadata({ data: "json, name=features", elemType: shared.AboutFeatures })
  features?: AboutFeatures[];

  @Metadata({ data: "json, name=folderColorPalette" })
  folderColorPalette?: string[];

  @Metadata({ data: "json, name=importFormats", elemType: shared.AboutImportFormats })
  importFormats?: AboutImportFormats[];

  @Metadata({ data: "json, name=isCurrentAppInstalled" })
  isCurrentAppInstalled?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=largestChangeId" })
  largestChangeId?: string;

  @Metadata({ data: "json, name=maxUploadSizes", elemType: shared.AboutMaxUploadSizes })
  maxUploadSizes?: AboutMaxUploadSizes[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @Metadata({ data: "json, name=quotaBytesByService", elemType: shared.AboutQuotaBytesByService })
  quotaBytesByService?: AboutQuotaBytesByService[];

  @Metadata({ data: "json, name=quotaBytesTotal" })
  quotaBytesTotal?: string;

  @Metadata({ data: "json, name=quotaBytesUsed" })
  quotaBytesUsed?: string;

  @Metadata({ data: "json, name=quotaBytesUsedAggregate" })
  quotaBytesUsedAggregate?: string;

  @Metadata({ data: "json, name=quotaBytesUsedInTrash" })
  quotaBytesUsedInTrash?: string;

  @Metadata({ data: "json, name=quotaType" })
  quotaType?: string;

  @Metadata({ data: "json, name=remainingChangeIds" })
  remainingChangeIds?: string;

  @Metadata({ data: "json, name=rootFolderId" })
  rootFolderId?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=teamDriveThemes", elemType: shared.AboutTeamDriveThemes })
  teamDriveThemes?: AboutTeamDriveThemes[];

  @Metadata({ data: "json, name=user" })
  user?: User;
}
