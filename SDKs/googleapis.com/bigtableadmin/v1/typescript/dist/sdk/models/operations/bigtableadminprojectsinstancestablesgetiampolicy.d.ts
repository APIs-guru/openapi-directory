import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesGetIamPolicySecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5;
    option6?: BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6;
}
export declare class BigtableadminProjectsInstancesTablesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesGetIamPolicyPathParams;
    queryParams: BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: BigtableadminProjectsInstancesTablesGetIamPolicySecurity;
}
export declare class BigtableadminProjectsInstancesTablesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
