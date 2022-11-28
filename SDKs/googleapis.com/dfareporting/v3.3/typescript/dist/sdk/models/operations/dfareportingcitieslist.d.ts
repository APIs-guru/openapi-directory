import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCitiesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCitiesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    countryDartIds?: string[];
    dartIds?: string[];
    fields?: string;
    key?: string;
    namePrefix?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    regionDartIds?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCitiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCitiesListRequest extends SpeakeasyBase {
    pathParams: DfareportingCitiesListPathParams;
    queryParams: DfareportingCitiesListQueryParams;
    security: DfareportingCitiesListSecurity;
}
export declare class DfareportingCitiesListResponse extends SpeakeasyBase {
    citiesListResponse?: shared.CitiesListResponse;
    contentType: string;
    statusCode: number;
}
