import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersSetNetworkPolicyPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersSetNetworkPolicyQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersSetNetworkPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersSetNetworkPolicyRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersSetNetworkPolicyPathParams;
    queryParams: ContainerProjectsZonesClustersSetNetworkPolicyQueryParams;
    request?: shared.SetNetworkPolicyRequest;
    security: ContainerProjectsZonesClustersSetNetworkPolicySecurity;
}
export declare class ContainerProjectsZonesClustersSetNetworkPolicyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
