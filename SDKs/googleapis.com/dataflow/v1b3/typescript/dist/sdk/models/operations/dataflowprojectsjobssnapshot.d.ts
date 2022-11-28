import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsSnapshotPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class DataflowProjectsJobsSnapshotQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsJobsSnapshotSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsSnapshotSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsSnapshotSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsSnapshotSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsSnapshotSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsSnapshotSecurityOption1;
    option2?: DataflowProjectsJobsSnapshotSecurityOption2;
    option3?: DataflowProjectsJobsSnapshotSecurityOption3;
    option4?: DataflowProjectsJobsSnapshotSecurityOption4;
}
export declare class DataflowProjectsJobsSnapshotRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsSnapshotPathParams;
    queryParams: DataflowProjectsJobsSnapshotQueryParams;
    request?: shared.SnapshotJobRequest;
    security: DataflowProjectsJobsSnapshotSecurity;
}
export declare class DataflowProjectsJobsSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    snapshot?: shared.Snapshot;
    statusCode: number;
}
