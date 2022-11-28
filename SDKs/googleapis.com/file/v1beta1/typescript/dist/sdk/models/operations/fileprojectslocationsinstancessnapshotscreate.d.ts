import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsInstancesSnapshotsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FileProjectsLocationsInstancesSnapshotsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    snapshotId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FileProjectsLocationsInstancesSnapshotsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsInstancesSnapshotsCreateRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsInstancesSnapshotsCreatePathParams;
    queryParams: FileProjectsLocationsInstancesSnapshotsCreateQueryParams;
    request?: shared.SnapshotInput;
    security: FileProjectsLocationsInstancesSnapshotsCreateSecurity;
}
export declare class FileProjectsLocationsInstancesSnapshotsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
