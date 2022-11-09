import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FileProjectsLocationsInstancesSnapshotsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FileProjectsLocationsInstancesSnapshotsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FileProjectsLocationsInstancesSnapshotsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FileProjectsLocationsInstancesSnapshotsPatchRequest extends SpeakeasyBase {
    pathParams: FileProjectsLocationsInstancesSnapshotsPatchPathParams;
    queryParams: FileProjectsLocationsInstancesSnapshotsPatchQueryParams;
    request?: shared.Snapshot;
    security: FileProjectsLocationsInstancesSnapshotsPatchSecurity;
}
export declare class FileProjectsLocationsInstancesSnapshotsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
