import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesUndeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsInstancesTablesUndeleteQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesUndeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesUndeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesUndeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesUndeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesUndeleteSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesUndeleteSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesUndeleteSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesUndeleteSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesUndeleteSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesUndeleteSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesUndeleteSecurityOption5;
}
export declare class BigtableadminProjectsInstancesTablesUndeleteRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesUndeletePathParams;
    queryParams: BigtableadminProjectsInstancesTablesUndeleteQueryParams;
    request?: Map<string, any>;
    security: BigtableadminProjectsInstancesTablesUndeleteSecurity;
}
export declare class BigtableadminProjectsInstancesTablesUndeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
