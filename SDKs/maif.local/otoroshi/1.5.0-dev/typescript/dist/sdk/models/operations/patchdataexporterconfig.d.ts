import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchDataExporterConfigPathParams extends SpeakeasyBase {
    dataExporterConfigId: string;
}
export declare class PatchDataExporterConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchDataExporterConfigRequest extends SpeakeasyBase {
    pathParams: PatchDataExporterConfigPathParams;
    request?: shared.Patch[];
    security: PatchDataExporterConfigSecurity;
}
export declare class PatchDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
}
