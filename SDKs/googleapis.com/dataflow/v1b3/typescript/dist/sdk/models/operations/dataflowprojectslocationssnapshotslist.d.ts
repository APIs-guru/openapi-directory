import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsSnapshotsListPathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsSnapshotsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    jobId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsSnapshotsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsSnapshotsListSecurityOption1;
    option2?: DataflowProjectsLocationsSnapshotsListSecurityOption2;
    option3?: DataflowProjectsLocationsSnapshotsListSecurityOption3;
    option4?: DataflowProjectsLocationsSnapshotsListSecurityOption4;
}
export declare class DataflowProjectsLocationsSnapshotsListRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsSnapshotsListPathParams;
    queryParams: DataflowProjectsLocationsSnapshotsListQueryParams;
    security: DataflowProjectsLocationsSnapshotsListSecurity;
}
export declare class DataflowProjectsLocationsSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    listSnapshotsResponse?: shared.ListSnapshotsResponse;
    statusCode: number;
}
