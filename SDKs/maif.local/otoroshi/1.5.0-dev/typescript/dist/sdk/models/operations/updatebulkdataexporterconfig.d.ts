import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBulkDataExporterConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare enum UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum {
    TwoHundred = "200"
}
/**
 * The bulk response
**/
export declare class UpdateBulkDataExporterConfig200ApplicationJson extends SpeakeasyBase {
    id?: boolean;
    status?: UpdateBulkDataExporterConfig200ApplicationJsonStatusEnum;
    updated?: boolean;
}
export declare class UpdateBulkDataExporterConfigRequest extends SpeakeasyBase {
    request?: shared.DataExporterConfig;
    security: UpdateBulkDataExporterConfigSecurity;
}
export declare class UpdateBulkDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateBulkDataExporterConfig200ApplicationJsonObjects?: UpdateBulkDataExporterConfig200ApplicationJson[];
}
