import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListQueryParams;
    security: HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresAttributeDefinitionsListResponse extends SpeakeasyBase {
    contentType: string;
    listAttributeDefinitionsResponse?: shared.ListAttributeDefinitionsResponse;
    statusCode: number;
}
