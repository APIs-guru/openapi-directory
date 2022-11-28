import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContainerProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    zone?: string;
}
export declare class ContainerProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsOperationsListPathParams;
    queryParams: ContainerProjectsLocationsOperationsListQueryParams;
    security: ContainerProjectsLocationsOperationsListSecurity;
}
export declare class ContainerProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
