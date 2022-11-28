import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsSnapshotsListPathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption1;
    option2?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption2;
    option3?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption3;
    option4?: DataflowProjectsLocationsJobsSnapshotsListSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsSnapshotsListPathParams;
    queryParams: DataflowProjectsLocationsJobsSnapshotsListQueryParams;
    security: DataflowProjectsLocationsJobsSnapshotsListSecurity;
}
export declare class DataflowProjectsLocationsJobsSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    listSnapshotsResponse?: shared.ListSnapshotsResponse;
    statusCode: number;
}
