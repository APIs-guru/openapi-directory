import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsOperationsListPathParams;
    queryParams: RunProjectsLocationsOperationsListQueryParams;
    security: RunProjectsLocationsOperationsListSecurity;
}
export declare class RunProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
