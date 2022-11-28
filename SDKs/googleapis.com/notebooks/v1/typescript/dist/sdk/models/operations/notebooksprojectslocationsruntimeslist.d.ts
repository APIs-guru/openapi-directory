import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsRuntimesListQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsRuntimesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesListRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesListPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesListQueryParams;
    security: NotebooksProjectsLocationsRuntimesListSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesListResponse extends SpeakeasyBase {
    contentType: string;
    listRuntimesResponse?: shared.ListRuntimesResponse;
    statusCode: number;
}
