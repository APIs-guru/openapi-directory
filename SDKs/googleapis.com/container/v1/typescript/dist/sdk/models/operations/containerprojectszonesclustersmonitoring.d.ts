import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersMonitoringPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersMonitoringQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersMonitoringSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersMonitoringRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersMonitoringPathParams;
    queryParams: ContainerProjectsZonesClustersMonitoringQueryParams;
    request?: shared.SetMonitoringServiceRequest;
    security: ContainerProjectsZonesClustersMonitoringSecurity;
}
export declare class ContainerProjectsZonesClustersMonitoringResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
