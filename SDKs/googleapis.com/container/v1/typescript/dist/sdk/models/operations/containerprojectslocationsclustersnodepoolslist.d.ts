import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersNodePoolsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clusterId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    zone?: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersNodePoolsListRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersNodePoolsListPathParams;
    queryParams: ContainerProjectsLocationsClustersNodePoolsListQueryParams;
    security: ContainerProjectsLocationsClustersNodePoolsListSecurity;
}
export declare class ContainerProjectsLocationsClustersNodePoolsListResponse extends SpeakeasyBase {
    contentType: string;
    listNodePoolsResponse?: shared.ListNodePoolsResponse;
    statusCode: number;
}
