import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class AboutAdditionalRoleInfoRoleSets extends SpeakeasyBase {
    additionalRoles?: string[];
    primaryRole?: string;
}
export declare class AboutAdditionalRoleInfo extends SpeakeasyBase {
    roleSets?: AboutAdditionalRoleInfoRoleSets[];
    type?: string;
}
export declare class AboutDriveThemes extends SpeakeasyBase {
    backgroundImageLink?: string;
    colorRgb?: string;
    id?: string;
}
export declare class AboutExportFormats extends SpeakeasyBase {
    source?: string;
    targets?: string[];
}
export declare class AboutFeatures extends SpeakeasyBase {
    featureName?: string;
    featureRate?: number;
}
export declare class AboutImportFormats extends SpeakeasyBase {
    source?: string;
    targets?: string[];
}
export declare class AboutMaxUploadSizes extends SpeakeasyBase {
    size?: string;
    type?: string;
}
export declare class AboutQuotaBytesByService extends SpeakeasyBase {
    bytesUsed?: string;
    serviceName?: string;
}
export declare class AboutTeamDriveThemes extends SpeakeasyBase {
    backgroundImageLink?: string;
    colorRgb?: string;
    id?: string;
}
/**
 * An item with user information and settings.
**/
export declare class About extends SpeakeasyBase {
    additionalRoleInfo?: AboutAdditionalRoleInfo[];
    canCreateDrives?: boolean;
    canCreateTeamDrives?: boolean;
    domainSharingPolicy?: string;
    driveThemes?: AboutDriveThemes[];
    etag?: string;
    exportFormats?: AboutExportFormats[];
    features?: AboutFeatures[];
    folderColorPalette?: string[];
    importFormats?: AboutImportFormats[];
    isCurrentAppInstalled?: boolean;
    kind?: string;
    languageCode?: string;
    largestChangeId?: string;
    maxUploadSizes?: AboutMaxUploadSizes[];
    name?: string;
    permissionId?: string;
    quotaBytesByService?: AboutQuotaBytesByService[];
    quotaBytesTotal?: string;
    quotaBytesUsed?: string;
    quotaBytesUsedAggregate?: string;
    quotaBytesUsedInTrash?: string;
    quotaType?: string;
    remainingChangeIds?: string;
    rootFolderId?: string;
    selfLink?: string;
    teamDriveThemes?: AboutTeamDriveThemes[];
    user?: User;
}
