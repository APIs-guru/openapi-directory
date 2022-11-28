import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserLandingPagesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdvertiserLandingPagesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertiserLandingPagesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserLandingPagesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserLandingPagesInsertPathParams;
    queryParams: DfareportingAdvertiserLandingPagesInsertQueryParams;
    request?: shared.LandingPage;
    security: DfareportingAdvertiserLandingPagesInsertSecurity;
}
export declare class DfareportingAdvertiserLandingPagesInsertResponse extends SpeakeasyBase {
    contentType: string;
    landingPage?: shared.LandingPage;
    statusCode: number;
}
