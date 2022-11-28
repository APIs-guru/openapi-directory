import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresListQueryParams extends SpeakeasyBase {
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
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresListRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresListPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresListQueryParams;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresListSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresListResponse extends SpeakeasyBase {
    contentType: string;
    listHl7V2StoresResponse?: shared.ListHl7V2StoresResponse;
    statusCode: number;
}
