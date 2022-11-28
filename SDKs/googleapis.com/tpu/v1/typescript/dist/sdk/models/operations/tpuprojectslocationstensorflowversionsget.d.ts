import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsTensorflowVersionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TpuProjectsLocationsTensorflowVersionsGetQueryParams extends SpeakeasyBase {
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
export declare class TpuProjectsLocationsTensorflowVersionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsTensorflowVersionsGetRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsTensorflowVersionsGetPathParams;
    queryParams: TpuProjectsLocationsTensorflowVersionsGetQueryParams;
    security: TpuProjectsLocationsTensorflowVersionsGetSecurity;
}
export declare class TpuProjectsLocationsTensorflowVersionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tensorFlowVersion?: shared.TensorFlowVersion;
}
