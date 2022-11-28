import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyPathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyQueryParams;
    request?: shared.GetIamPolicyRequest;
    security: ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicySecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
