import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class AboutDriveThemes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// AboutStorageQuota
/** 
 * The user's storage quota limits and usage. All fields are measured in bytes.
**/
export class AboutStorageQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: string;

  @SpeakeasyMetadata({ data: "json, name=usageInDrive" })
  usageInDrive?: string;

  @SpeakeasyMetadata({ data: "json, name=usageInDriveTrash" })
  usageInDriveTrash?: string;
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
 * Information about the user, the user's Drive, and system capabilities.
**/
export class About extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appInstalled" })
  appInstalled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCreateDrives" })
  canCreateDrives?: boolean;

  @SpeakeasyMetadata({ data: "json, name=canCreateTeamDrives" })
  canCreateTeamDrives?: boolean;

  @SpeakeasyMetadata({ data: "json, name=driveThemes", elemType: AboutDriveThemes })
  driveThemes?: AboutDriveThemes[];

  @SpeakeasyMetadata({ data: "json, name=exportFormats" })
  exportFormats?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=folderColorPalette" })
  folderColorPalette?: string[];

  @SpeakeasyMetadata({ data: "json, name=importFormats" })
  importFormats?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=maxImportSizes" })
  maxImportSizes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maxUploadSize" })
  maxUploadSize?: string;

  @SpeakeasyMetadata({ data: "json, name=storageQuota" })
  storageQuota?: AboutStorageQuota;

  @SpeakeasyMetadata({ data: "json, name=teamDriveThemes", elemType: AboutTeamDriveThemes })
  teamDriveThemes?: AboutTeamDriveThemes[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
