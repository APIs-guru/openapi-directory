import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DriveFilesListCorpusEnum {
    Default = "DEFAULT",
    Domain = "DOMAIN"
}
export declare enum DriveFilesListProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DriveFilesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    corpora?: string;
    corpus?: DriveFilesListCorpusEnum;
    driveId?: string;
    fields?: string;
    includeItemsFromAllDrives?: boolean;
    includeLabels?: string;
    includePermissionsForView?: string;
    includeTeamDriveItems?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    projection?: DriveFilesListProjectionEnum;
    q?: string;
    quotaUser?: string;
    spaces?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    teamDriveId?: string;
    userIp?: string;
}
export declare class DriveFilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesListSecurity extends SpeakeasyBase {
    option1?: DriveFilesListSecurityOption1;
    option2?: DriveFilesListSecurityOption2;
    option3?: DriveFilesListSecurityOption3;
    option4?: DriveFilesListSecurityOption4;
    option5?: DriveFilesListSecurityOption5;
    option6?: DriveFilesListSecurityOption6;
    option7?: DriveFilesListSecurityOption7;
    option8?: DriveFilesListSecurityOption8;
}
export declare class DriveFilesListRequest extends SpeakeasyBase {
    queryParams: DriveFilesListQueryParams;
    security: DriveFilesListSecurity;
}
export declare class DriveFilesListResponse extends SpeakeasyBase {
    contentType: string;
    fileList?: shared.FileList;
    statusCode: number;
}
