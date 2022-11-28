import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsSnapshotsListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DataflowProjectsSnapshotsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    jobId?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsSnapshotsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsSnapshotsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsSnapshotsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsSnapshotsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsSnapshotsListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsSnapshotsListSecurityOption1;
    option2?: DataflowProjectsSnapshotsListSecurityOption2;
    option3?: DataflowProjectsSnapshotsListSecurityOption3;
    option4?: DataflowProjectsSnapshotsListSecurityOption4;
}
export declare class DataflowProjectsSnapshotsListRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsSnapshotsListPathParams;
    queryParams: DataflowProjectsSnapshotsListQueryParams;
    security: DataflowProjectsSnapshotsListSecurity;
}
export declare class DataflowProjectsSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    listSnapshotsResponse?: shared.ListSnapshotsResponse;
    statusCode: number;
}
