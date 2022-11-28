import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListQueryParams;
    security: HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresUserDataMappingsListResponse extends SpeakeasyBase {
    contentType: string;
    listUserDataMappingsResponse?: shared.ListUserDataMappingsResponse;
    statusCode: number;
}
