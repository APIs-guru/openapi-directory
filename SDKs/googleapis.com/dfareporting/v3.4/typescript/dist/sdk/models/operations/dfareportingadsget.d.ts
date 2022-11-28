import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingAdsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingAdsGetPathParams;
    queryParams: DfareportingAdsGetQueryParams;
    security: DfareportingAdsGetSecurity;
}
export declare class DfareportingAdsGetResponse extends SpeakeasyBase {
    ad?: shared.Ad;
    contentType: string;
    statusCode: number;
}
