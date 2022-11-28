import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersNodePoolsUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersNodePoolsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersNodePoolsUpdateRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersNodePoolsUpdatePathParams;
    queryParams: ContainerProjectsLocationsClustersNodePoolsUpdateQueryParams;
    request?: shared.UpdateNodePoolRequest;
    security: ContainerProjectsLocationsClustersNodePoolsUpdateSecurity;
}
export declare class ContainerProjectsLocationsClustersNodePoolsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
