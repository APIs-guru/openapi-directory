import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class AboutAdditionalRoleInfoRoleSets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalRoles" })
  additionalRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=primaryRole" })
  primaryRole?: string;
}


export class AboutAdditionalRoleInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=roleSets", elemType: AboutAdditionalRoleInfoRoleSets })
  roleSets?: AboutAdditionalRoleInfoRoleSets[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AboutDriveThemes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class AboutExportFormats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];
}


export class AboutFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featureName" })
  featureName?: string;

  @SpeakeasyMetadata({ data: "json, name=featureRate" })
  featureRate?: number;
}


export class AboutImportFormats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=targets" })
  targets?: string[];
}


export class AboutMaxUploadSizes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AboutQuotaBytesByService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bytesUsed" })
  bytesUsed?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}


export class AboutTeamDriveThemes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// About
/** 
 * An item with user information and settings.
**/
export class About extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalRoleInfo", elemType: AboutAdditionalRoleInfo })
  additionalRoleInfo?: AboutAdditionalRoleInfo[];

  @SpeakeasyMetadata({ data: "json, name=canCreateDrives" })
  canCreateDrives?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCreateTeamDrives" })
  canCreateTeamDrives?: boolean;

  @SpeakeasyMetadata({ data: "json, name=domainSharingPolicy" })
  domainSharingPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=driveThemes", elemType: AboutDriveThemes })
  driveThemes?: AboutDriveThemes[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=exportFormats", elemType: AboutExportFormats })
  exportFormats?: AboutExportFormats[];

  @SpeakeasyMetadata({ data: "json, name=features", elemType: AboutFeatures })
  features?: AboutFeatures[];

  @SpeakeasyMetadata({ data: "json, name=folderColorPalette" })
  folderColorPalette?: string[];

  @SpeakeasyMetadata({ data: "json, name=importFormats", elemType: AboutImportFormats })
  importFormats?: AboutImportFormats[];

  @SpeakeasyMetadata({ data: "json, name=isCurrentAppInstalled" })
  isCurrentAppInstalled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=largestChangeId" })
  largestChangeId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxUploadSizes", elemType: AboutMaxUploadSizes })
  maxUploadSizes?: AboutMaxUploadSizes[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionId" })
  permissionId?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaBytesByService", elemType: AboutQuotaBytesByService })
  quotaBytesByService?: AboutQuotaBytesByService[];

  @SpeakeasyMetadata({ data: "json, name=quotaBytesTotal" })
  quotaBytesTotal?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaBytesUsed" })
  quotaBytesUsed?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaBytesUsedAggregate" })
  quotaBytesUsedAggregate?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaBytesUsedInTrash" })
  quotaBytesUsedInTrash?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaType" })
  quotaType?: string;

  @SpeakeasyMetadata({ data: "json, name=remainingChangeIds" })
  remainingChangeIds?: string;

  @SpeakeasyMetadata({ data: "json, name=rootFolderId" })
  rootFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=teamDriveThemes", elemType: AboutTeamDriveThemes })
  teamDriveThemes?: AboutTeamDriveThemes[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
