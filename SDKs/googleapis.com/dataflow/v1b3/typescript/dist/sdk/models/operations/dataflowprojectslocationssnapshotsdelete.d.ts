import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsSnapshotsDeletePathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
    snapshotId: string;
}
export declare class DataflowProjectsLocationsSnapshotsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsSnapshotsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsSnapshotsDeleteSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsSnapshotsDeleteSecurityOption1;
    option2?: DataflowProjectsLocationsSnapshotsDeleteSecurityOption2;
    option3?: DataflowProjectsLocationsSnapshotsDeleteSecurityOption3;
    option4?: DataflowProjectsLocationsSnapshotsDeleteSecurityOption4;
}
export declare class DataflowProjectsLocationsSnapshotsDeleteRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsSnapshotsDeletePathParams;
    queryParams: DataflowProjectsLocationsSnapshotsDeleteQueryParams;
    security: DataflowProjectsLocationsSnapshotsDeleteSecurity;
}
export declare class DataflowProjectsLocationsSnapshotsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    deleteSnapshotResponse?: Map<string, any>;
    statusCode: number;
}
