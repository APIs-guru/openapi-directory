import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertisersInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingAdvertisersInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertisersInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertisersInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertisersInsertPathParams;
    queryParams: DfareportingAdvertisersInsertQueryParams;
    request?: shared.Advertiser;
    security: DfareportingAdvertisersInsertSecurity;
}
export declare class DfareportingAdvertisersInsertResponse extends SpeakeasyBase {
    advertiser?: shared.Advertiser;
    contentType: string;
    statusCode: number;
}
