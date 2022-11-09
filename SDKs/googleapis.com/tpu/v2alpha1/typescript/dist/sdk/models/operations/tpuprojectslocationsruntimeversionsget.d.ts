import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsRuntimeVersionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TpuProjectsLocationsRuntimeVersionsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TpuProjectsLocationsRuntimeVersionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsRuntimeVersionsGetRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsRuntimeVersionsGetPathParams;
    queryParams: TpuProjectsLocationsRuntimeVersionsGetQueryParams;
    security: TpuProjectsLocationsRuntimeVersionsGetSecurity;
}
export declare class TpuProjectsLocationsRuntimeVersionsGetResponse extends SpeakeasyBase {
    contentType: string;
    runtimeVersion?: shared.RuntimeVersion;
    statusCode: number;
}
