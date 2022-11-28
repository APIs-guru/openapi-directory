import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDataExporterConfigPathParams extends SpeakeasyBase {
    dataExporterConfigId: string;
}
export declare class DeleteDataExporterConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteDataExporterConfigRequest extends SpeakeasyBase {
    pathParams: DeleteDataExporterConfigPathParams;
    security: DeleteDataExporterConfigSecurity;
}
export declare class DeleteDataExporterConfigResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
