import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveTeamdrivesDeletePathParams extends SpeakeasyBase {
    teamDriveId: string;
}
export declare class DriveTeamdrivesDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class DriveTeamdrivesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveTeamdrivesDeleteRequest extends SpeakeasyBase {
    pathParams: DriveTeamdrivesDeletePathParams;
    queryParams: DriveTeamdrivesDeleteQueryParams;
    security: DriveTeamdrivesDeleteSecurity;
}
export declare class DriveTeamdrivesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
