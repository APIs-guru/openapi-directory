import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams;
    queryParams: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams;
    request?: Map<string, any>;
    security: BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity;
}
export declare class BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse extends SpeakeasyBase {
    contentType: string;
    generateConsistencyTokenResponse?: shared.GenerateConsistencyTokenResponse;
    statusCode: number;
}
