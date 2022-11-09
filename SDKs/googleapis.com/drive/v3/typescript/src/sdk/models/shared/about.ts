import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";


export class AboutDriveThemes extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundImageLink" })
  backgroundImageLink?: string;

  @Metadata({ data: "json, name=colorRgb" })
  colorRgb?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}


// AboutStorageQuota
/** 
 * The user's storage quota limits and usage. All fields are measured in bytes.
**/
export class AboutStorageQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=limit" })
  limit?: string;

  @Metadata({ data: "json, name=usage" })
  usage?: string;

  @Metadata({ data: "json, name=usageInDrive" })
  usageInDrive?: string;

  @Metadata({ data: "json, name=usageInDriveTrash" })
  usageInDriveTrash?: string;
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
 * Information about the user, the user's Drive, and system capabilities.
**/
export class About extends SpeakeasyBase {
  @Metadata({ data: "json, name=appInstalled" })
  appInstalled?: boolean;

  @Metadata({ data: "json, name=canCreateDrives" })
  canCreateDrives?: boolean;

  @Metadata({ data: "json, name=canCreateTeamDrives" })
  canCreateTeamDrives?: boolean;

  @Metadata({ data: "json, name=driveThemes", elemType: shared.AboutDriveThemes })
  driveThemes?: AboutDriveThemes[];

  @Metadata({ data: "json, name=exportFormats" })
  exportFormats?: Map<string, string[]>;

  @Metadata({ data: "json, name=folderColorPalette" })
  folderColorPalette?: string[];

  @Metadata({ data: "json, name=importFormats" })
  importFormats?: Map<string, string[]>;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=maxImportSizes" })
  maxImportSizes?: Map<string, string>;

  @Metadata({ data: "json, name=maxUploadSize" })
  maxUploadSize?: string;

  @Metadata({ data: "json, name=storageQuota" })
  storageQuota?: AboutStorageQuota;

  @Metadata({ data: "json, name=teamDriveThemes", elemType: shared.AboutTeamDriveThemes })
  teamDriveThemes?: AboutTeamDriveThemes[];

  @Metadata({ data: "json, name=user" })
  user?: User;
}
