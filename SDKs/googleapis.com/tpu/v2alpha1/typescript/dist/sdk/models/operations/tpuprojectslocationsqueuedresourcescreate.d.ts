import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsQueuedResourcesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TpuProjectsLocationsQueuedResourcesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    queuedResourceId?: string;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TpuProjectsLocationsQueuedResourcesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsQueuedResourcesCreateRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsQueuedResourcesCreatePathParams;
    queryParams: TpuProjectsLocationsQueuedResourcesCreateQueryParams;
    request?: shared.QueuedResourceInput;
    security: TpuProjectsLocationsQueuedResourcesCreateSecurity;
}
export declare class TpuProjectsLocationsQueuedResourcesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
