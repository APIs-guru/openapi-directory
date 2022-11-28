import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsSnapshotPathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsJobsSnapshotQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsJobsSnapshotSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsSnapshotSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsSnapshotSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsSnapshotSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsSnapshotSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsSnapshotSecurityOption1;
    option2?: DataflowProjectsLocationsJobsSnapshotSecurityOption2;
    option3?: DataflowProjectsLocationsJobsSnapshotSecurityOption3;
    option4?: DataflowProjectsLocationsJobsSnapshotSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsSnapshotRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsSnapshotPathParams;
    queryParams: DataflowProjectsLocationsJobsSnapshotQueryParams;
    request?: shared.SnapshotJobRequest;
    security: DataflowProjectsLocationsJobsSnapshotSecurity;
}
export declare class DataflowProjectsLocationsJobsSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    snapshot?: shared.Snapshot;
    statusCode: number;
}
