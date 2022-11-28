import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingMobileAppsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingMobileAppsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingMobileAppsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingMobileAppsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingMobileAppsGetPathParams;
    queryParams: DfareportingMobileAppsGetQueryParams;
    security: DfareportingMobileAppsGetSecurity;
}
export declare class DfareportingMobileAppsGetResponse extends SpeakeasyBase {
    contentType: string;
    mobileApp?: shared.MobileApp;
    statusCode: number;
}
