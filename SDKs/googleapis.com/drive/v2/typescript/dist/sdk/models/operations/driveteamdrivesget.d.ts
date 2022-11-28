import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveTeamdrivesGetPathParams extends SpeakeasyBase {
    teamDriveId: string;
}
export declare class DriveTeamdrivesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DriveTeamdrivesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveTeamdrivesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveTeamdrivesGetSecurity extends SpeakeasyBase {
    option1?: DriveTeamdrivesGetSecurityOption1;
    option2?: DriveTeamdrivesGetSecurityOption2;
}
export declare class DriveTeamdrivesGetRequest extends SpeakeasyBase {
    pathParams: DriveTeamdrivesGetPathParams;
    queryParams: DriveTeamdrivesGetQueryParams;
    security: DriveTeamdrivesGetSecurity;
}
export declare class DriveTeamdrivesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDrive?: shared.TeamDrive;
}
