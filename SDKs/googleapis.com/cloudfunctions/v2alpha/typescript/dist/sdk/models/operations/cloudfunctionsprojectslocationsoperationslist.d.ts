import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudfunctionsProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class CloudfunctionsProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsOperationsListPathParams;
    queryParams: CloudfunctionsProjectsLocationsOperationsListQueryParams;
    security: CloudfunctionsProjectsLocationsOperationsListSecurity;
}
export declare class CloudfunctionsProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
