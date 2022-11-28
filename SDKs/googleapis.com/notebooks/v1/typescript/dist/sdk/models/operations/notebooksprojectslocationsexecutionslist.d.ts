import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsExecutionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsExecutionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsExecutionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsExecutionsListRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsExecutionsListPathParams;
    queryParams: NotebooksProjectsLocationsExecutionsListQueryParams;
    security: NotebooksProjectsLocationsExecutionsListSecurity;
}
export declare class NotebooksProjectsLocationsExecutionsListResponse extends SpeakeasyBase {
    contentType: string;
    listExecutionsResponse?: shared.ListExecutionsResponse;
    statusCode: number;
}
