import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertiserGroupsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdvertiserGroupsPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertiserGroupsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertiserGroupsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertiserGroupsPatchPathParams;
    queryParams: DfareportingAdvertiserGroupsPatchQueryParams;
    request?: shared.AdvertiserGroup;
    security: DfareportingAdvertiserGroupsPatchSecurity;
}
export declare class DfareportingAdvertiserGroupsPatchResponse extends SpeakeasyBase {
    advertiserGroup?: shared.AdvertiserGroup;
    contentType: string;
    statusCode: number;
}
