import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveFilesWatchPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DriveFilesWatchQueryParams extends SpeakeasyBase {
    acknowledgeAbuse?: boolean;
    alt?: shared.AltEnum;
    fields?: string;
    includeLabels?: string;
    includePermissionsForView?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    userIp?: string;
}
export declare class DriveFilesWatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesWatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesWatchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesWatchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesWatchSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesWatchSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesWatchSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveFilesWatchSecurity extends SpeakeasyBase {
    option1?: DriveFilesWatchSecurityOption1;
    option2?: DriveFilesWatchSecurityOption2;
    option3?: DriveFilesWatchSecurityOption3;
    option4?: DriveFilesWatchSecurityOption4;
    option5?: DriveFilesWatchSecurityOption5;
    option6?: DriveFilesWatchSecurityOption6;
    option7?: DriveFilesWatchSecurityOption7;
}
export declare class DriveFilesWatchRequest extends SpeakeasyBase {
    pathParams: DriveFilesWatchPathParams;
    queryParams: DriveFilesWatchQueryParams;
    request?: shared.Channel;
    security: DriveFilesWatchSecurity;
}
export declare class DriveFilesWatchResponse extends SpeakeasyBase {
    channel?: shared.Channel;
    contentType: string;
    statusCode: number;
}
