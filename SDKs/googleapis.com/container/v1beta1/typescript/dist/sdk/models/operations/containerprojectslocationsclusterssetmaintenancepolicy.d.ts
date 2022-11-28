import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersSetMaintenancePolicyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersSetMaintenancePolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersSetMaintenancePolicyRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersSetMaintenancePolicyPathParams;
    queryParams: ContainerProjectsLocationsClustersSetMaintenancePolicyQueryParams;
    request?: shared.SetMaintenancePolicyRequest;
    security: ContainerProjectsLocationsClustersSetMaintenancePolicySecurity;
}
export declare class ContainerProjectsLocationsClustersSetMaintenancePolicyResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
