import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListPathParams;
    queryParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListQueryParams;
    security: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListSecurity;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListResponse extends SpeakeasyBase {
    contentType: string;
    listRolloutsResponse?: shared.ListRolloutsResponse;
    statusCode: number;
}
