import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertisersPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdvertisersPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertisersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertisersPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertisersPatchPathParams;
    queryParams: DfareportingAdvertisersPatchQueryParams;
    request?: shared.Advertiser;
    security: DfareportingAdvertisersPatchSecurity;
}
export declare class DfareportingAdvertisersPatchResponse extends SpeakeasyBase {
    advertiser?: shared.Advertiser;
    contentType: string;
    statusCode: number;
}
