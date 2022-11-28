import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersListPathParams extends SpeakeasyBase {
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersListQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersListRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersListPathParams;
    queryParams: ContainerProjectsZonesClustersListQueryParams;
    security: ContainerProjectsZonesClustersListSecurity;
}
export declare class ContainerProjectsZonesClustersListResponse extends SpeakeasyBase {
    contentType: string;
    listClustersResponse?: shared.ListClustersResponse;
    statusCode: number;
}
