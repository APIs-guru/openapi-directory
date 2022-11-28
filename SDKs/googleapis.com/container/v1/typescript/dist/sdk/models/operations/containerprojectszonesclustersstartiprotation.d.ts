import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersStartIpRotationPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersStartIpRotationQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersStartIpRotationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersStartIpRotationRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersStartIpRotationPathParams;
    queryParams: ContainerProjectsZonesClustersStartIpRotationQueryParams;
    request?: shared.StartIpRotationRequest;
    security: ContainerProjectsZonesClustersStartIpRotationSecurity;
}
export declare class ContainerProjectsZonesClustersStartIpRotationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
