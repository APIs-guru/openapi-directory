import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingAdsUpdatePathParams;
    queryParams: DfareportingAdsUpdateQueryParams;
    request?: shared.Ad;
    security: DfareportingAdsUpdateSecurity;
}
export declare class DfareportingAdsUpdateResponse extends SpeakeasyBase {
    ad?: shared.Ad;
    contentType: string;
    statusCode: number;
}
