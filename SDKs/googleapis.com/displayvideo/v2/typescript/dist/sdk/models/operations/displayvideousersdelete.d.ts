import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoUsersDeletePathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DisplayvideoUsersDeleteQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoUsersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoUsersDeleteRequest extends SpeakeasyBase {
    pathParams: DisplayvideoUsersDeletePathParams;
    queryParams: DisplayvideoUsersDeleteQueryParams;
    security: DisplayvideoUsersDeleteSecurity;
}
export declare class DisplayvideoUsersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
