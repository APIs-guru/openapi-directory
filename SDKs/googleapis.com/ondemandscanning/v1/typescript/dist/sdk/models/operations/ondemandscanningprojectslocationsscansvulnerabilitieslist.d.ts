import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OndemandscanningProjectsLocationsScansVulnerabilitiesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OndemandscanningProjectsLocationsScansVulnerabilitiesListQueryParams extends SpeakeasyBase {
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
export declare class OndemandscanningProjectsLocationsScansVulnerabilitiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OndemandscanningProjectsLocationsScansVulnerabilitiesListRequest extends SpeakeasyBase {
    pathParams: OndemandscanningProjectsLocationsScansVulnerabilitiesListPathParams;
    queryParams: OndemandscanningProjectsLocationsScansVulnerabilitiesListQueryParams;
    security: OndemandscanningProjectsLocationsScansVulnerabilitiesListSecurity;
}
export declare class OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse extends SpeakeasyBase {
    contentType: string;
    listVulnerabilitiesResponseV1?: shared.ListVulnerabilitiesResponseV1;
    statusCode: number;
}
