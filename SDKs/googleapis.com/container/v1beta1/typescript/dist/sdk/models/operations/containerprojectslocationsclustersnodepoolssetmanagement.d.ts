import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersNodePoolsSetManagementPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsSetManagementQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersNodePoolsSetManagementSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersNodePoolsSetManagementRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersNodePoolsSetManagementPathParams;
    queryParams: ContainerProjectsLocationsClustersNodePoolsSetManagementQueryParams;
    request?: shared.SetNodePoolManagementRequest;
    security: ContainerProjectsLocationsClustersNodePoolsSetManagementSecurity;
}
export declare class ContainerProjectsLocationsClustersNodePoolsSetManagementResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
