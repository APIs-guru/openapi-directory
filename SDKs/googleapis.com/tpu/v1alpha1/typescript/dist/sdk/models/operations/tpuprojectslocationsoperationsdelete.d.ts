import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class TpuProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class TpuProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsOperationsDeletePathParams;
    queryParams: TpuProjectsLocationsOperationsDeleteQueryParams;
    security: TpuProjectsLocationsOperationsDeleteSecurity;
}
export declare class TpuProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
