import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsEnvironmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsEnvironmentsListQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsEnvironmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsEnvironmentsListRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsEnvironmentsListPathParams;
    queryParams: NotebooksProjectsLocationsEnvironmentsListQueryParams;
    security: NotebooksProjectsLocationsEnvironmentsListSecurity;
}
export declare class NotebooksProjectsLocationsEnvironmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listEnvironmentsResponse?: shared.ListEnvironmentsResponse;
    statusCode: number;
}
