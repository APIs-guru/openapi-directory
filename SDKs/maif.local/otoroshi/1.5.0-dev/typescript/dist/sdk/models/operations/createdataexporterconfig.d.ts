import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDataExporterConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateDataExporterConfigRequest extends SpeakeasyBase {
    request?: shared.DataExporterConfig;
    security: CreateDataExporterConfigSecurity;
}
export declare class CreateDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
}
