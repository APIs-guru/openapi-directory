import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveTeamdrivesListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    q?: string;
    quotaUser?: string;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DriveTeamdrivesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveTeamdrivesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveTeamdrivesListSecurity extends SpeakeasyBase {
    option1?: DriveTeamdrivesListSecurityOption1;
    option2?: DriveTeamdrivesListSecurityOption2;
}
export declare class DriveTeamdrivesListRequest extends SpeakeasyBase {
    queryParams: DriveTeamdrivesListQueryParams;
    security: DriveTeamdrivesListSecurity;
}
export declare class DriveTeamdrivesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamDriveList?: shared.TeamDriveList;
}
