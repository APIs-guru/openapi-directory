import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchBulkDataExporterConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare enum PatchBulkDataExporterConfig200ApplicationJsonStatusEnum {
    TwoHundred = "200"
}
/**
 * The bulk response
**/
export declare class PatchBulkDataExporterConfig200ApplicationJson extends SpeakeasyBase {
    id?: boolean;
    status?: PatchBulkDataExporterConfig200ApplicationJsonStatusEnum;
    updated?: boolean;
}
export declare class PatchBulkDataExporterConfigRequest extends SpeakeasyBase {
    request?: shared.Patch[];
    security: PatchBulkDataExporterConfigSecurity;
}
export declare class PatchBulkDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patchBulkDataExporterConfig200ApplicationJsonObjects?: PatchBulkDataExporterConfig200ApplicationJson[];
}
