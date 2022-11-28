import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveTeamdrivesUpdatePathParams extends SpeakeasyBase {
    teamDriveId: string;
}
export declare class DriveTeamdrivesUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DriveTeamdrivesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveTeamdrivesUpdateRequest extends SpeakeasyBase {
    pathParams: DriveTeamdrivesUpdatePathParams;
    queryParams: DriveTeamdrivesUpdateQueryParams;
    request?: shared.TeamDrive;
    security: DriveTeamdrivesUpdateSecurity;
}
export declare class DriveTeamdrivesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDrive?: shared.TeamDrive;
}
