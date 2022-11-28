import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBulkDataExporterConfigsSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare enum CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum {
    TwoHundredAndOne = "201"
}
/**
 * The bulk response
**/
export declare class CreateBulkDataExporterConfigs200ApplicationJson extends SpeakeasyBase {
    created?: boolean;
    id?: boolean;
    status?: CreateBulkDataExporterConfigs200ApplicationJsonStatusEnum;
}
export declare class CreateBulkDataExporterConfigsRequest extends SpeakeasyBase {
    request?: shared.DataExporterConfig;
    security: CreateBulkDataExporterConfigsSecurity;
}
export declare class CreateBulkDataExporterConfigsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createBulkDataExporterConfigs200ApplicationJsonObjects?: CreateBulkDataExporterConfigs200ApplicationJson[];
}
