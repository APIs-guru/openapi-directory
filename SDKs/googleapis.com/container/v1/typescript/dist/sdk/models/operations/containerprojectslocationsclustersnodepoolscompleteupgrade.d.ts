import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersNodePoolsCompleteUpgradePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersNodePoolsCompleteUpgradePathParams;
    queryParams: ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeQueryParams;
    request?: Map<string, any>;
    security: ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeSecurity;
}
export declare class ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
