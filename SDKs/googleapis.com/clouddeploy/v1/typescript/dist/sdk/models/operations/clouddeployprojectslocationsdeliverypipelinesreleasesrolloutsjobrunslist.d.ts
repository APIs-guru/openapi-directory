import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListQueryParams extends SpeakeasyBase {
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
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListPathParams;
    queryParams: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListQueryParams;
    security: ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListSecurity;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobRunsResponse?: shared.ListJobRunsResponse;
    statusCode: number;
}
