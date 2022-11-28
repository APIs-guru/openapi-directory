import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyQueryParams;
    security: CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
