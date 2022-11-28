import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersNodePoolsListPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersNodePoolsListRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersNodePoolsListPathParams;
    queryParams: ContainerProjectsZonesClustersNodePoolsListQueryParams;
    security: ContainerProjectsZonesClustersNodePoolsListSecurity;
}
export declare class ContainerProjectsZonesClustersNodePoolsListResponse extends SpeakeasyBase {
    contentType: string;
    listNodePoolsResponse?: shared.ListNodePoolsResponse;
    statusCode: number;
}
