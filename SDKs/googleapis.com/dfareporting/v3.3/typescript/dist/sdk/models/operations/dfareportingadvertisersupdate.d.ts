import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertisersUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdvertisersUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertisersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertisersUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertisersUpdatePathParams;
    queryParams: DfareportingAdvertisersUpdateQueryParams;
    request?: shared.Advertiser;
    security: DfareportingAdvertisersUpdateSecurity;
}
export declare class DfareportingAdvertisersUpdateResponse extends SpeakeasyBase {
    advertiser?: shared.Advertiser;
    contentType: string;
    statusCode: number;
}
