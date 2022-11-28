import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersNodePoolsSetSizePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersNodePoolsSetSizeRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersNodePoolsSetSizePathParams;
    queryParams: ContainerProjectsLocationsClustersNodePoolsSetSizeQueryParams;
    request?: shared.SetNodePoolSizeRequest;
    security: ContainerProjectsLocationsClustersNodePoolsSetSizeSecurity;
}
export declare class ContainerProjectsLocationsClustersNodePoolsSetSizeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
