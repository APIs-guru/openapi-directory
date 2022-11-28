import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudtasksProjectsLocationsQueuesListQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesListRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesListPathParams;
    queryParams: CloudtasksProjectsLocationsQueuesListQueryParams;
    security: CloudtasksProjectsLocationsQueuesListSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesListResponse extends SpeakeasyBase {
    contentType: string;
    listQueuesResponse?: shared.ListQueuesResponse;
    statusCode: number;
}
