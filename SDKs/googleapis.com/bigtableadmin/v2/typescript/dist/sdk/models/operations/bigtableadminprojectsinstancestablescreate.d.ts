import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigtableadminProjectsInstancesTablesCreateQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCreateSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesCreateSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesCreateSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesCreateSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesCreateSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesCreateSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesCreateSecurityOption5;
}
export declare class BigtableadminProjectsInstancesTablesCreateRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesCreatePathParams;
    queryParams: BigtableadminProjectsInstancesTablesCreateQueryParams;
    request?: shared.CreateTableRequestInput;
    security: BigtableadminProjectsInstancesTablesCreateSecurity;
}
export declare class BigtableadminProjectsInstancesTablesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    table?: shared.Table;
}
