import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsInstancesSharesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FileProjectsLocationsInstancesSharesListQueryParams extends SpeakeasyBase {
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
export declare class FileProjectsLocationsInstancesSharesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsInstancesSharesListRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsInstancesSharesListPathParams;
    queryParams: FileProjectsLocationsInstancesSharesListQueryParams;
    security: FileProjectsLocationsInstancesSharesListSecurity;
}
export declare class FileProjectsLocationsInstancesSharesListResponse extends SpeakeasyBase {
    contentType: string;
    listSharesResponse?: shared.ListSharesResponse;
    statusCode: number;
}
