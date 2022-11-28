import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DriveactivityActivityQueryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DriveactivityActivityQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveactivityActivityQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DriveactivityActivityQuerySecurity extends SpeakeasyBase {
    option1?: DriveactivityActivityQuerySecurityOption1;
    option2?: DriveactivityActivityQuerySecurityOption2;
}
export declare class DriveactivityActivityQueryRequest extends SpeakeasyBase {
    queryParams: DriveactivityActivityQueryQueryParams;
    request?: shared.QueryDriveActivityRequest;
    security: DriveactivityActivityQuerySecurity;
}
export declare class DriveactivityActivityQueryResponse extends SpeakeasyBase {
    contentType: string;
    queryDriveActivityResponse?: shared.QueryDriveActivityResponse;
    statusCode: number;
}
