import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesApplicationsGetPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare enum GamesApplicationsGetPlatformTypeEnum {
    PlatformTypeUnspecified = "PLATFORM_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    WebApp = "WEB_APP"
}
export declare class GamesApplicationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    platformType?: GamesApplicationsGetPlatformTypeEnum;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesApplicationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesApplicationsGetRequest extends SpeakeasyBase {
    pathParams: GamesApplicationsGetPathParams;
    queryParams: GamesApplicationsGetQueryParams;
    security: GamesApplicationsGetSecurity;
}
export declare class GamesApplicationsGetResponse extends SpeakeasyBase {
    application?: shared.Application;
    contentType: string;
    statusCode: number;
}
