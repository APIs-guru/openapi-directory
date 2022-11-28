import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDataExporterConfigPathParams extends SpeakeasyBase {
    dataExporterConfigId: string;
}
export declare class UpdateDataExporterConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateDataExporterConfigRequest extends SpeakeasyBase {
    pathParams: UpdateDataExporterConfigPathParams;
    request?: shared.DataExporterConfig;
    security: UpdateDataExporterConfigSecurity;
}
export declare class UpdateDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
}
