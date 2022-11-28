import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsSnapshotsGetPathParams extends SpeakeasyBase {
    projectId: string;
    snapshotId: string;
}
export declare class DataflowProjectsSnapshotsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsSnapshotsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsSnapshotsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsSnapshotsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsSnapshotsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsSnapshotsGetSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsSnapshotsGetSecurityOption1;
    option2?: DataflowProjectsSnapshotsGetSecurityOption2;
    option3?: DataflowProjectsSnapshotsGetSecurityOption3;
    option4?: DataflowProjectsSnapshotsGetSecurityOption4;
}
export declare class DataflowProjectsSnapshotsGetRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsSnapshotsGetPathParams;
    queryParams: DataflowProjectsSnapshotsGetQueryParams;
    security: DataflowProjectsSnapshotsGetSecurity;
}
export declare class DataflowProjectsSnapshotsGetResponse extends SpeakeasyBase {
    contentType: string;
    snapshot?: shared.Snapshot;
    statusCode: number;
}
