import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveChangesGetStartPageTokenQueryParams extends SpeakeasyBase {
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
export declare class DriveChangesGetStartPageTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetStartPageTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetStartPageTokenSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetStartPageTokenSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetStartPageTokenSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetStartPageTokenSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetStartPageTokenSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetStartPageTokenSecurityOption8 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveChangesGetStartPageTokenSecurity extends SpeakeasyBase {
    option1?: DriveChangesGetStartPageTokenSecurityOption1;
    option2?: DriveChangesGetStartPageTokenSecurityOption2;
    option3?: DriveChangesGetStartPageTokenSecurityOption3;
    option4?: DriveChangesGetStartPageTokenSecurityOption4;
    option5?: DriveChangesGetStartPageTokenSecurityOption5;
    option6?: DriveChangesGetStartPageTokenSecurityOption6;
    option7?: DriveChangesGetStartPageTokenSecurityOption7;
    option8?: DriveChangesGetStartPageTokenSecurityOption8;
}
export declare class DriveChangesGetStartPageTokenRequest extends SpeakeasyBase {
    queryParams: DriveChangesGetStartPageTokenQueryParams;
    security: DriveChangesGetStartPageTokenSecurity;
}
export declare class DriveChangesGetStartPageTokenResponse extends SpeakeasyBase {
    contentType: string;
    startPageToken?: shared.StartPageToken;
    statusCode: number;
}
