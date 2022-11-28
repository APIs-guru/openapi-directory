import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesCheckConsistencyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencySecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencyRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesCheckConsistencyPathParams;
    queryParams: BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams;
    request?: shared.CheckConsistencyRequest;
    security: BigtableadminProjectsInstancesTablesCheckConsistencySecurity;
}
export declare class BigtableadminProjectsInstancesTablesCheckConsistencyResponse extends SpeakeasyBase {
    checkConsistencyResponse?: shared.CheckConsistencyResponse;
    contentType: string;
    statusCode: number;
}
