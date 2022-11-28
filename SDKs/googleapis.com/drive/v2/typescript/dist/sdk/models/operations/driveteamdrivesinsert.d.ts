import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveTeamdrivesInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId: string;
    userIp?: string;
}
export declare class DriveTeamdrivesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveTeamdrivesInsertRequest extends SpeakeasyBase {
    queryParams: DriveTeamdrivesInsertQueryParams;
    request?: shared.TeamDrive;
    security: DriveTeamdrivesInsertSecurity;
}
export declare class DriveTeamdrivesInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDrive?: shared.TeamDrive;
}
