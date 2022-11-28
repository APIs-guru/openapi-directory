import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentsListPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentsListQueryParams;
    security: HealthcareProjectsLocationsDatasetsConsentStoresConsentsListSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListResponse extends SpeakeasyBase {
    contentType: string;
    listConsentsResponse?: shared.ListConsentsResponse;
    statusCode: number;
}
