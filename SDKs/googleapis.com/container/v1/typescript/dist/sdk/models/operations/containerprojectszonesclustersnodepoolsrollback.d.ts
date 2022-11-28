import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersNodePoolsRollbackPathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsRollbackQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersNodePoolsRollbackSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersNodePoolsRollbackRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersNodePoolsRollbackPathParams;
    queryParams: ContainerProjectsZonesClustersNodePoolsRollbackQueryParams;
    request?: shared.RollbackNodePoolUpgradeRequest;
    security: ContainerProjectsZonesClustersNodePoolsRollbackSecurity;
}
export declare class ContainerProjectsZonesClustersNodePoolsRollbackResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
