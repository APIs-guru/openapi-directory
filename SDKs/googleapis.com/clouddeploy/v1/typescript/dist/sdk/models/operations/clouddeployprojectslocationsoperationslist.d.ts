import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ClouddeployProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class ClouddeployProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsOperationsListPathParams;
    queryParams: ClouddeployProjectsLocationsOperationsListQueryParams;
    security: ClouddeployProjectsLocationsOperationsListSecurity;
}
export declare class ClouddeployProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
