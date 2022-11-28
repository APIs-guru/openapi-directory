import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsAggregatedUsableSubnetworksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContainerProjectsAggregatedUsableSubnetworksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContainerProjectsAggregatedUsableSubnetworksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsAggregatedUsableSubnetworksListRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsAggregatedUsableSubnetworksListPathParams;
    queryParams: ContainerProjectsAggregatedUsableSubnetworksListQueryParams;
    security: ContainerProjectsAggregatedUsableSubnetworksListSecurity;
}
export declare class ContainerProjectsAggregatedUsableSubnetworksListResponse extends SpeakeasyBase {
    contentType: string;
    listUsableSubnetworksResponse?: shared.ListUsableSubnetworksResponse;
    statusCode: number;
}
