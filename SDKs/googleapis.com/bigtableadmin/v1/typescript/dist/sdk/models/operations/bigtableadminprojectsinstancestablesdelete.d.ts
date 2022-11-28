import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsInstancesTablesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ignoreWarnings?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigtableadminProjectsInstancesTablesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDeleteSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDeleteSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDeleteSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDeleteSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesDeleteSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesDeleteSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesDeleteSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesDeleteSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesDeleteSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesDeleteSecurityOption5;
    option6?: BigtableadminProjectsInstancesTablesDeleteSecurityOption6;
}
export declare class BigtableadminProjectsInstancesTablesDeleteRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesDeletePathParams;
    queryParams: BigtableadminProjectsInstancesTablesDeleteQueryParams;
    security: BigtableadminProjectsInstancesTablesDeleteSecurity;
}
export declare class BigtableadminProjectsInstancesTablesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
