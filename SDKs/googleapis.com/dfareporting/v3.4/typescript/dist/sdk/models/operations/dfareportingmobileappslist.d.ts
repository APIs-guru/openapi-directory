import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingMobileAppsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingMobileAppsListDirectoriesEnum {
    Unknown = "UNKNOWN",
    AppleAppStore = "APPLE_APP_STORE",
    GooglePlayStore = "GOOGLE_PLAY_STORE"
}
export declare class DfareportingMobileAppsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    directories?: DfareportingMobileAppsListDirectoriesEnum[];
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingMobileAppsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingMobileAppsListRequest extends SpeakeasyBase {
    pathParams: DfareportingMobileAppsListPathParams;
    queryParams: DfareportingMobileAppsListQueryParams;
    security: DfareportingMobileAppsListSecurity;
}
export declare class DfareportingMobileAppsListResponse extends SpeakeasyBase {
    contentType: string;
    mobileAppsListResponse?: shared.MobileAppsListResponse;
    statusCode: number;
}
