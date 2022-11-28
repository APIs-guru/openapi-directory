import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersNodePoolsCreatePathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersNodePoolsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersNodePoolsCreateRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersNodePoolsCreatePathParams;
    queryParams: ContainerProjectsZonesClustersNodePoolsCreateQueryParams;
    request?: shared.CreateNodePoolRequest;
    security: ContainerProjectsZonesClustersNodePoolsCreateSecurity;
}
export declare class ContainerProjectsZonesClustersNodePoolsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
