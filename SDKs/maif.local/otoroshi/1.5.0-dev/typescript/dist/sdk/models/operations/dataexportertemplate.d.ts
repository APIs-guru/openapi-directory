import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataExporterTemplateQueryParams extends SpeakeasyBase {
    type?: string;
}
export declare class DataExporterTemplateSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DataExporterTemplateRequest extends SpeakeasyBase {
    queryParams: DataExporterTemplateQueryParams;
    security: DataExporterTemplateSecurity;
}
export declare class DataExporterTemplateResponse extends SpeakeasyBase {
    contentType: string;
    dataExporterConfig?: shared.DataExporterConfig;
    statusCode: number;
}
