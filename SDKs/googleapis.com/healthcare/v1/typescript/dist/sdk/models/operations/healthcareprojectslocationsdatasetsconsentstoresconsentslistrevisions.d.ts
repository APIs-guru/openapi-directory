import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsQueryParams;
    security: HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsConsentStoresConsentsListRevisionsResponse extends SpeakeasyBase {
    contentType: string;
    listConsentRevisionsResponse?: shared.ListConsentRevisionsResponse;
    statusCode: number;
}
