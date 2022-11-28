import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindDataExporterConfigByIdPathParams extends SpeakeasyBase {
    dataExporterConfigId: string;
}
export declare class FindDataExporterConfigByIdSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindDataExporterConfigByIdRequest extends SpeakeasyBase {
    pathParams: FindDataExporterConfigByIdPathParams;
    security: FindDataExporterConfigByIdSecurity;
}
export declare class FindDataExporterConfigByIdResponse extends SpeakeasyBase {
    contentType: string;
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
}
