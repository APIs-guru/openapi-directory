import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersSetMasterAuthPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersSetMasterAuthQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersSetMasterAuthSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersSetMasterAuthRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersSetMasterAuthPathParams;
    queryParams: ContainerProjectsZonesClustersSetMasterAuthQueryParams;
    request?: shared.SetMasterAuthRequest;
    security: ContainerProjectsZonesClustersSetMasterAuthSecurity;
}
export declare class ContainerProjectsZonesClustersSetMasterAuthResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
