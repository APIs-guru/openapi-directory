import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsSchedulesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsSchedulesListQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsSchedulesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsSchedulesListRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsSchedulesListPathParams;
    queryParams: NotebooksProjectsLocationsSchedulesListQueryParams;
    security: NotebooksProjectsLocationsSchedulesListSecurity;
}
export declare class NotebooksProjectsLocationsSchedulesListResponse extends SpeakeasyBase {
    contentType: string;
    listSchedulesResponse?: shared.ListSchedulesResponse;
    statusCode: number;
}
