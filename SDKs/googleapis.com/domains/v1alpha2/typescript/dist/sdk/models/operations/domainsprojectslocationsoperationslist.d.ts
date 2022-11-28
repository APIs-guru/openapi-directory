import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DomainsProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class DomainsProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsOperationsListPathParams;
    queryParams: DomainsProjectsLocationsOperationsListQueryParams;
    security: DomainsProjectsLocationsOperationsListSecurity;
}
export declare class DomainsProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
