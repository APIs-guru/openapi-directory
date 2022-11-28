import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveChangesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    driveId?: string;
    fields?: string;
    includeCorpusRemovals?: boolean;
    includeItemsFromAllDrives?: boolean;
    includeLabels?: string;
    includePermissionsForView?: string;
    includeRemoved?: boolean;
    includeTeamDriveItems?: boolean;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    restrictToMyDrive?: boolean;
    spaces?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    teamDriveId?: string;
    userIp?: string;
}
export declare class DriveChangesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesListSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesListSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesListSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesListSecurity extends SpeakeasyBase {
    option1?: DriveChangesListSecurityOption1;
    option2?: DriveChangesListSecurityOption2;
    option3?: DriveChangesListSecurityOption3;
    option4?: DriveChangesListSecurityOption4;
    option5?: DriveChangesListSecurityOption5;
    option6?: DriveChangesListSecurityOption6;
    option7?: DriveChangesListSecurityOption7;
}
export declare class DriveChangesListRequest extends SpeakeasyBase {
    queryParams: DriveChangesListQueryParams;
    security: DriveChangesListSecurity;
}
export declare class DriveChangesListResponse extends SpeakeasyBase {
    changeList?: shared.ChangeList;
    contentType: string;
    statusCode: number;
}
