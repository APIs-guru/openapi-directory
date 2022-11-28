import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersGetPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContainerProjectsZonesClustersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersGetRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersGetPathParams;
    queryParams: ContainerProjectsZonesClustersGetQueryParams;
    security: ContainerProjectsZonesClustersGetSecurity;
}
export declare class ContainerProjectsZonesClustersGetResponse extends SpeakeasyBase {
    cluster?: shared.Cluster;
    contentType: string;
    statusCode: number;
}
