import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserLandingPagesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdvertiserLandingPagesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertiserLandingPagesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserLandingPagesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserLandingPagesUpdatePathParams;
    queryParams: DfareportingAdvertiserLandingPagesUpdateQueryParams;
    request?: shared.LandingPage;
    security: DfareportingAdvertiserLandingPagesUpdateSecurity;
}
export declare class DfareportingAdvertiserLandingPagesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    landingPage?: shared.LandingPage;
    statusCode: number;
}
