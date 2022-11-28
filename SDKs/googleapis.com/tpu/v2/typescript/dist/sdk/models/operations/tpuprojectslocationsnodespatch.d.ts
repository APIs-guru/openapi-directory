import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsNodesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TpuProjectsLocationsNodesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TpuProjectsLocationsNodesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsNodesPatchRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsNodesPatchPathParams;
    queryParams: TpuProjectsLocationsNodesPatchQueryParams;
    request?: shared.NodeInput;
    security: TpuProjectsLocationsNodesPatchSecurity;
}
export declare class TpuProjectsLocationsNodesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
