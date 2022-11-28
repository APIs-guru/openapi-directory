import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyPathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicySecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesServicesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
