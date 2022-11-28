import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsRevisionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsRevisionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    continue?: string;
    fieldSelector?: string;
    fields?: string;
    includeUninitialized?: boolean;
    key?: string;
    labelSelector?: string;
    limit?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    resourceVersion?: string;
    uploadType?: string;
    uploadProtocol?: string;
    watch?: boolean;
}
export declare class RunProjectsLocationsRevisionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsRevisionsListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsRevisionsListPathParams;
    queryParams: RunProjectsLocationsRevisionsListQueryParams;
    security: RunProjectsLocationsRevisionsListSecurity;
}
export declare class RunProjectsLocationsRevisionsListResponse extends SpeakeasyBase {
    contentType: string;
    listRevisionsResponse?: shared.ListRevisionsResponse;
    statusCode: number;
}
