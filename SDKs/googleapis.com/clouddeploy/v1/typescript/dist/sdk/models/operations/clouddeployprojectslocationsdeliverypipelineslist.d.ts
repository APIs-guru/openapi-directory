import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsDeliveryPipelinesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesListQueryParams extends SpeakeasyBase {
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
export declare class ClouddeployProjectsLocationsDeliveryPipelinesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesListRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsDeliveryPipelinesListPathParams;
    queryParams: ClouddeployProjectsLocationsDeliveryPipelinesListQueryParams;
    security: ClouddeployProjectsLocationsDeliveryPipelinesListSecurity;
}
export declare class ClouddeployProjectsLocationsDeliveryPipelinesListResponse extends SpeakeasyBase {
    contentType: string;
    listDeliveryPipelinesResponse?: shared.ListDeliveryPipelinesResponse;
    statusCode: number;
}
