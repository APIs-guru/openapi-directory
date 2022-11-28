import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindAllDataExportersSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindAllDataExportersRequest extends SpeakeasyBase {
    security: FindAllDataExportersSecurity;
}
export declare class FindAllDataExportersResponse extends SpeakeasyBase {
    contentType: string;
    dataExporterConfigs?: shared.DataExporterConfig[];
    statusCode: number;
}
