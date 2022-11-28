import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersResourceLabelsPathParams extends SpeakeasyBase {
    clusterId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersResourceLabelsQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersResourceLabelsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersResourceLabelsRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersResourceLabelsPathParams;
    queryParams: ContainerProjectsZonesClustersResourceLabelsQueryParams;
    request?: shared.SetLabelsRequest;
    security: ContainerProjectsZonesClustersResourceLabelsSecurity;
}
export declare class ContainerProjectsZonesClustersResourceLabelsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
