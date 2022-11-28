import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesClustersBackupsCopyPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCopyQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCopySecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1;
    option2?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2;
    option3?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3;
    option4?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4;
    option5?: BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCopyRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesClustersBackupsCopyPathParams;
    queryParams: BigtableadminProjectsInstancesClustersBackupsCopyQueryParams;
    request?: shared.CopyBackupRequest;
    security: BigtableadminProjectsInstancesClustersBackupsCopySecurity;
}
export declare class BigtableadminProjectsInstancesClustersBackupsCopyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
