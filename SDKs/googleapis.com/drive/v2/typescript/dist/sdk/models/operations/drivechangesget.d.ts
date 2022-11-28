import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveChangesGetPathParams extends SpeakeasyBase {
    changeId: string;
}
export declare class DriveChangesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    driveId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    supportsAllDrives?: boolean;
    supportsTeamDrives?: boolean;
    teamDriveId?: string;
    userIp?: string;
}
export declare class DriveChangesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetSecurity extends SpeakeasyBase {
    option1?: DriveChangesGetSecurityOption1;
    option2?: DriveChangesGetSecurityOption2;
    option3?: DriveChangesGetSecurityOption3;
    option4?: DriveChangesGetSecurityOption4;
    option5?: DriveChangesGetSecurityOption5;
    option6?: DriveChangesGetSecurityOption6;
    option7?: DriveChangesGetSecurityOption7;
    option8?: DriveChangesGetSecurityOption8;
}
export declare class DriveChangesGetRequest extends SpeakeasyBase {
    pathParams: DriveChangesGetPathParams;
    queryParams: DriveChangesGetQueryParams;
    security: DriveChangesGetSecurity;
}
export declare class DriveChangesGetResponse extends SpeakeasyBase {
    change?: shared.Change;
    contentType: string;
    statusCode: number;
}
