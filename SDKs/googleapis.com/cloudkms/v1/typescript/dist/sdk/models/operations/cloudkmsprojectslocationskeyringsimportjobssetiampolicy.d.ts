import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
