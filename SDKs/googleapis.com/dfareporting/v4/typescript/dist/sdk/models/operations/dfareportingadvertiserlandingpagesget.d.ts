import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserLandingPagesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingAdvertiserLandingPagesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertiserLandingPagesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserLandingPagesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserLandingPagesGetPathParams;
    queryParams: DfareportingAdvertiserLandingPagesGetQueryParams;
    security: DfareportingAdvertiserLandingPagesGetSecurity;
}
export declare class DfareportingAdvertiserLandingPagesGetResponse extends SpeakeasyBase {
    contentType: string;
    landingPage?: shared.LandingPage;
    statusCode: number;
}
