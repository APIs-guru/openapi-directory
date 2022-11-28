import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsQueuedResourcesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class TpuProjectsLocationsQueuedResourcesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TpuProjectsLocationsQueuedResourcesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsQueuedResourcesDeleteRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsQueuedResourcesDeletePathParams;
    queryParams: TpuProjectsLocationsQueuedResourcesDeleteQueryParams;
    security: TpuProjectsLocationsQueuedResourcesDeleteSecurity;
}
export declare class TpuProjectsLocationsQueuedResourcesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
