import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingAdsInsertPathParams;
    queryParams: DfareportingAdsInsertQueryParams;
    request?: shared.Ad;
    security: DfareportingAdsInsertSecurity;
}
export declare class DfareportingAdsInsertResponse extends SpeakeasyBase {
    ad?: shared.Ad;
    contentType: string;
    statusCode: number;
}
