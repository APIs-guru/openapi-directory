import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesRestorePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesTablesRestoreQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesRestoreSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesRestoreSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesRestoreSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesRestoreSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesRestoreSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesRestoreSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesRestoreSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesRestoreSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesRestoreSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesRestoreSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesRestoreSecurityOption5;
}
export declare class BigtableadminProjectsInstancesTablesRestoreRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesRestorePathParams;
    queryParams: BigtableadminProjectsInstancesTablesRestoreQueryParams;
    request?: shared.RestoreTableRequest;
    security: BigtableadminProjectsInstancesTablesRestoreSecurity;
}
export declare class BigtableadminProjectsInstancesTablesRestoreResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
