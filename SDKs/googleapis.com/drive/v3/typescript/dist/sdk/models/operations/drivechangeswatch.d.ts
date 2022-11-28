import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveChangesWatchQueryParams extends SpeakeasyBase {
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
export declare class DriveChangesWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesWatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesWatchSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesWatchSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesWatchSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesWatchSecurity extends SpeakeasyBase {
    option1?: DriveChangesWatchSecurityOption1;
    option2?: DriveChangesWatchSecurityOption2;
    option3?: DriveChangesWatchSecurityOption3;
    option4?: DriveChangesWatchSecurityOption4;
    option5?: DriveChangesWatchSecurityOption5;
    option6?: DriveChangesWatchSecurityOption6;
    option7?: DriveChangesWatchSecurityOption7;
}
export declare class DriveChangesWatchRequest extends SpeakeasyBase {
    queryParams: DriveChangesWatchQueryParams;
    request?: shared.Channel;
    security: DriveChangesWatchSecurity;
}
export declare class DriveChangesWatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
