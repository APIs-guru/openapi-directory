import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class HealthcareProjectsLocationsDatasetsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsOperationsListRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsOperationsListPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsOperationsListQueryParams;
    security: HealthcareProjectsLocationsDatasetsOperationsListSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
