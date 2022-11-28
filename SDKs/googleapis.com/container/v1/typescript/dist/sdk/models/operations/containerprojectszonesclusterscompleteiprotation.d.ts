import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersCompleteIpRotationPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersCompleteIpRotationQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersCompleteIpRotationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersCompleteIpRotationRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersCompleteIpRotationPathParams;
    queryParams: ContainerProjectsZonesClustersCompleteIpRotationQueryParams;
    request?: shared.CompleteIpRotationRequest;
    security: ContainerProjectsZonesClustersCompleteIpRotationSecurity;
}
export declare class ContainerProjectsZonesClustersCompleteIpRotationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
