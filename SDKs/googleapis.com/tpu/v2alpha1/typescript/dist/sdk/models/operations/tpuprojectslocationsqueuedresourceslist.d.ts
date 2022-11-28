import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsQueuedResourcesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TpuProjectsLocationsQueuedResourcesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TpuProjectsLocationsQueuedResourcesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsQueuedResourcesListRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsQueuedResourcesListPathParams;
    queryParams: TpuProjectsLocationsQueuedResourcesListQueryParams;
    security: TpuProjectsLocationsQueuedResourcesListSecurity;
}
export declare class TpuProjectsLocationsQueuedResourcesListResponse extends SpeakeasyBase {
    contentType: string;
    listQueuedResourcesResponse?: shared.ListQueuedResourcesResponse;
    statusCode: number;
}
