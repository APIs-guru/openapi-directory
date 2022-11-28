import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class HealthcareProjectsLocationsDatasetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsListRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsListPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsListQueryParams;
    security: HealthcareProjectsLocationsDatasetsListSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsListResponse extends SpeakeasyBase {
    contentType: string;
    listDatasetsResponse?: shared.ListDatasetsResponse;
    statusCode: number;
}
