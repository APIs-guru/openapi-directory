import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesOperationsListPathParams extends SpeakeasyBase {
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesOperationsListQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesOperationsListRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesOperationsListPathParams;
    queryParams: ContainerProjectsZonesOperationsListQueryParams;
    security: ContainerProjectsZonesOperationsListSecurity;
}
export declare class ContainerProjectsZonesOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
