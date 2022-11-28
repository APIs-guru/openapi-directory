import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsBackupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FileProjectsLocationsBackupsListQueryParams extends SpeakeasyBase {
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
export declare class FileProjectsLocationsBackupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsBackupsListRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsBackupsListPathParams;
    queryParams: FileProjectsLocationsBackupsListQueryParams;
    security: FileProjectsLocationsBackupsListSecurity;
}
export declare class FileProjectsLocationsBackupsListResponse extends SpeakeasyBase {
    contentType: string;
    listBackupsResponse?: shared.ListBackupsResponse;
    statusCode: number;
}
