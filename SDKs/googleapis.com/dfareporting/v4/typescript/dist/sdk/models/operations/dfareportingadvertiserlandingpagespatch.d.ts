import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserLandingPagesPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdvertiserLandingPagesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingAdvertiserLandingPagesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserLandingPagesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserLandingPagesPatchPathParams;
    queryParams: DfareportingAdvertiserLandingPagesPatchQueryParams;
    request?: shared.LandingPage;
    security: DfareportingAdvertiserLandingPagesPatchSecurity;
}
export declare class DfareportingAdvertiserLandingPagesPatchResponse extends SpeakeasyBase {
    contentType: string;
    landingPage?: shared.LandingPage;
    statusCode: number;
}
