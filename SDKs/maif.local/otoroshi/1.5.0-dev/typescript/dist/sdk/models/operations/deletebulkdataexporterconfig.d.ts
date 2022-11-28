import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletebulkDataExporterConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare enum DeletebulkDataExporterConfig200ApplicationJsonStatusEnum {
    TwoHundred = "200"
}
/**
 * The bulk response
**/
export declare class DeletebulkDataExporterConfig200ApplicationJson extends SpeakeasyBase {
    deleted?: boolean;
    id?: boolean;
    status?: DeletebulkDataExporterConfig200ApplicationJsonStatusEnum;
}
export declare class DeletebulkDataExporterConfigRequest extends SpeakeasyBase {
    request?: shared.Patch[];
    security: DeletebulkDataExporterConfigSecurity;
}
export declare class DeletebulkDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deletebulkDataExporterConfig200ApplicationJsonObjects?: DeletebulkDataExporterConfig200ApplicationJson[];
}
