import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsGenerateServiceIdentityPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TpuProjectsLocationsGenerateServiceIdentityQueryParams extends SpeakeasyBase {
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
export declare class TpuProjectsLocationsGenerateServiceIdentitySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsGenerateServiceIdentityRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsGenerateServiceIdentityPathParams;
    queryParams: TpuProjectsLocationsGenerateServiceIdentityQueryParams;
    request?: Map<string, any>;
    security: TpuProjectsLocationsGenerateServiceIdentitySecurity;
}
export declare class TpuProjectsLocationsGenerateServiceIdentityResponse extends SpeakeasyBase {
    contentType: string;
    generateServiceIdentityResponse?: shared.GenerateServiceIdentityResponse;
    statusCode: number;
}
