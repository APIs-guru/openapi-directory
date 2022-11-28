import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TpuProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class TpuProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsOperationsCancelPathParams;
    queryParams: TpuProjectsLocationsOperationsCancelQueryParams;
    security: TpuProjectsLocationsOperationsCancelSecurity;
}
export declare class TpuProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
