import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersSetMaintenancePolicyPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersSetMaintenancePolicyQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersSetMaintenancePolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersSetMaintenancePolicyRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersSetMaintenancePolicyPathParams;
    queryParams: ContainerProjectsZonesClustersSetMaintenancePolicyQueryParams;
    request?: shared.SetMaintenancePolicyRequest;
    security: ContainerProjectsZonesClustersSetMaintenancePolicySecurity;
}
export declare class ContainerProjectsZonesClustersSetMaintenancePolicyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
