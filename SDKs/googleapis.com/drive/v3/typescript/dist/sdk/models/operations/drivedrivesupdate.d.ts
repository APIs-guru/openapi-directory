import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveDrivesUpdatePathParams extends SpeakeasyBase {
    driveId: string;
}
export declare class DriveDrivesUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    useDomainAdminAccess?: boolean;
    userIp?: string;
}
export declare class DriveDrivesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveDrivesUpdateRequest extends SpeakeasyBase {
    pathParams: DriveDrivesUpdatePathParams;
    queryParams: DriveDrivesUpdateQueryParams;
    request?: shared.Drive;
    security: DriveDrivesUpdateSecurity;
}
export declare class DriveDrivesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    drive?: shared.Drive;
    statusCode: number;
}
