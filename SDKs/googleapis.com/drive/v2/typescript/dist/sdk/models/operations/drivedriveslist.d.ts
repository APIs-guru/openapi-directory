import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveDrivesListQueryParams extends SpeakeasyBase {
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
export declare class DriveDrivesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesListSecurity extends SpeakeasyBase {
    option1?: DriveDrivesListSecurityOption1;
    option2?: DriveDrivesListSecurityOption2;
}
export declare class DriveDrivesListRequest extends SpeakeasyBase {
    queryParams: DriveDrivesListQueryParams;
    security: DriveDrivesListSecurity;
}
export declare class DriveDrivesListResponse extends SpeakeasyBase {
    contentType: string;
    driveList?: shared.DriveList;
    statusCode: number;
}
