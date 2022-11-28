import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersLegacyAbacPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersLegacyAbacQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersLegacyAbacSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersLegacyAbacRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersLegacyAbacPathParams;
    queryParams: ContainerProjectsZonesClustersLegacyAbacQueryParams;
    request?: shared.SetLegacyAbacRequest;
    security: ContainerProjectsZonesClustersLegacyAbacSecurity;
}
export declare class ContainerProjectsZonesClustersLegacyAbacResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
