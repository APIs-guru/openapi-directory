import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCountriesGetPathParams extends SpeakeasyBase {
    dartId: string;
    profileId: string;
}
export declare class DfareportingCountriesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCountriesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCountriesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingCountriesGetPathParams;
    queryParams: DfareportingCountriesGetQueryParams;
    security: DfareportingCountriesGetSecurity;
}
export declare class DfareportingCountriesGetResponse extends SpeakeasyBase {
    contentType: string;
    country?: shared.Country;
    statusCode: number;
}
