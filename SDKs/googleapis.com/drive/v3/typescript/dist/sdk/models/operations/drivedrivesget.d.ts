import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveDrivesGetPathParams extends SpeakeasyBase {
    driveId: string;
}
export declare class DriveDrivesGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DriveDrivesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesGetSecurity extends SpeakeasyBase {
    option1?: DriveDrivesGetSecurityOption1;
    option2?: DriveDrivesGetSecurityOption2;
}
export declare class DriveDrivesGetRequest extends SpeakeasyBase {
    pathParams: DriveDrivesGetPathParams;
    queryParams: DriveDrivesGetQueryParams;
    security: DriveDrivesGetSecurity;
}
export declare class DriveDrivesGetResponse extends SpeakeasyBase {
    contentType: string;
    drive?: shared.Drive;
    statusCode: number;
}
