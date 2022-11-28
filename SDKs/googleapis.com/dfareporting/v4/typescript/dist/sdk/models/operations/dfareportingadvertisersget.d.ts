import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAdvertisersGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingAdvertisersGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAdvertisersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAdvertisersGetRequest extends SpeakeasyBase {
    pathParams: DfareportingAdvertisersGetPathParams;
    queryParams: DfareportingAdvertisersGetQueryParams;
    security: DfareportingAdvertisersGetSecurity;
}
export declare class DfareportingAdvertisersGetResponse extends SpeakeasyBase {
    advertiser?: shared.Advertiser;
    contentType: string;
    statusCode: number;
}
