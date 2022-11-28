import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsDeleteSnapshotsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DataflowProjectsDeleteSnapshotsQueryParams extends SpeakeasyBase {
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
    snapshotId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsDeleteSnapshotsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsDeleteSnapshotsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsDeleteSnapshotsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsDeleteSnapshotsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsDeleteSnapshotsSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsDeleteSnapshotsSecurityOption1;
    option2?: DataflowProjectsDeleteSnapshotsSecurityOption2;
    option3?: DataflowProjectsDeleteSnapshotsSecurityOption3;
    option4?: DataflowProjectsDeleteSnapshotsSecurityOption4;
}
export declare class DataflowProjectsDeleteSnapshotsRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsDeleteSnapshotsPathParams;
    queryParams: DataflowProjectsDeleteSnapshotsQueryParams;
    security: DataflowProjectsDeleteSnapshotsSecurity;
}
export declare class DataflowProjectsDeleteSnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    deleteSnapshotResponse?: Map<string, any>;
    statusCode: number;
}
