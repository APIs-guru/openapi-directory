import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsInstancesSnapshotsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FileProjectsLocationsInstancesSnapshotsListQueryParams extends SpeakeasyBase {
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
export declare class FileProjectsLocationsInstancesSnapshotsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsInstancesSnapshotsListRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsInstancesSnapshotsListPathParams;
    queryParams: FileProjectsLocationsInstancesSnapshotsListQueryParams;
    security: FileProjectsLocationsInstancesSnapshotsListSecurity;
}
export declare class FileProjectsLocationsInstancesSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    listSnapshotsResponse?: shared.ListSnapshotsResponse;
    statusCode: number;
}
