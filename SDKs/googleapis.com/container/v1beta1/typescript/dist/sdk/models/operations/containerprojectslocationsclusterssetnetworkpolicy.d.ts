import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersSetNetworkPolicyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersSetNetworkPolicyQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersSetNetworkPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersSetNetworkPolicyRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersSetNetworkPolicyPathParams;
    queryParams: ContainerProjectsLocationsClustersSetNetworkPolicyQueryParams;
    request?: shared.SetNetworkPolicyRequest;
    security: ContainerProjectsLocationsClustersSetNetworkPolicySecurity;
}
export declare class ContainerProjectsLocationsClustersSetNetworkPolicyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
