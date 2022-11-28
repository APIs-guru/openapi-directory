import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsInstancesTablesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsInstancesTablesSetIamPolicySecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1;
    option2?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2;
    option3?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3;
    option4?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4;
    option5?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5;
    option6?: BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6;
}
export declare class BigtableadminProjectsInstancesTablesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsInstancesTablesSetIamPolicyPathParams;
    queryParams: BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: BigtableadminProjectsInstancesTablesSetIamPolicySecurity;
}
export declare class BigtableadminProjectsInstancesTablesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
