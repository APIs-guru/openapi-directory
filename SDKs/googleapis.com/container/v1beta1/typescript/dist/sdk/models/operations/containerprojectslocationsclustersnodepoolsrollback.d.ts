import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersNodePoolsRollbackPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsRollbackQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersNodePoolsRollbackSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersNodePoolsRollbackRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersNodePoolsRollbackPathParams;
    queryParams: ContainerProjectsLocationsClustersNodePoolsRollbackQueryParams;
    request?: shared.RollbackNodePoolUpgradeRequest;
    security: ContainerProjectsLocationsClustersNodePoolsRollbackSecurity;
}
export declare class ContainerProjectsLocationsClustersNodePoolsRollbackResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
