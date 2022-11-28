import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveTeamdrivesCreateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId: string;
    userIp?: string;
}
export declare class DriveTeamdrivesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveTeamdrivesCreateRequest extends SpeakeasyBase {
    queryParams: DriveTeamdrivesCreateQueryParams;
    request?: shared.TeamDrive;
    security: DriveTeamdrivesCreateSecurity;
}
export declare class DriveTeamdrivesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDrive?: shared.TeamDrive;
}
