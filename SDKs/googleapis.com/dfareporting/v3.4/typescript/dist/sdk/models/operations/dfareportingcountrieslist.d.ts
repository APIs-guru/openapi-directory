import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCountriesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCountriesListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCountriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCountriesListRequest extends SpeakeasyBase {
    pathParams: DfareportingCountriesListPathParams;
    queryParams: DfareportingCountriesListQueryParams;
    security: DfareportingCountriesListSecurity;
}
export declare class DfareportingCountriesListResponse extends SpeakeasyBase {
    contentType: string;
    countriesListResponse?: shared.CountriesListResponse;
    statusCode: number;
}
