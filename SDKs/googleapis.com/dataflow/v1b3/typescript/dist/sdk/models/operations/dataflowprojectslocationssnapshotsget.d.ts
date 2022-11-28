import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsSnapshotsGetPathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
    snapshotId: string;
}
export declare class DataflowProjectsLocationsSnapshotsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsSnapshotsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsGetSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsSnapshotsGetSecurityOption1;
    option2?: DataflowProjectsLocationsSnapshotsGetSecurityOption2;
    option3?: DataflowProjectsLocationsSnapshotsGetSecurityOption3;
    option4?: DataflowProjectsLocationsSnapshotsGetSecurityOption4;
}
export declare class DataflowProjectsLocationsSnapshotsGetRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsSnapshotsGetPathParams;
    queryParams: DataflowProjectsLocationsSnapshotsGetQueryParams;
    security: DataflowProjectsLocationsSnapshotsGetSecurity;
}
export declare class DataflowProjectsLocationsSnapshotsGetResponse extends SpeakeasyBase {
    contentType: string;
    snapshot?: shared.Snapshot;
    statusCode: number;
}
