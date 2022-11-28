import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersUpdatePathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersUpdateQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersUpdateRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersUpdatePathParams;
    queryParams: ContainerProjectsZonesClustersUpdateQueryParams;
    request?: shared.UpdateClusterRequest;
    security: ContainerProjectsZonesClustersUpdateSecurity;
}
export declare class ContainerProjectsZonesClustersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
