import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasExportTemplatesListQueryParams extends SpeakeasyBase {
    contentType?: string;
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class ExtrasExportTemplatesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.ExportTemplate[];
}
export declare class ExtrasExportTemplatesListRequest extends SpeakeasyBase {
    queryParams: ExtrasExportTemplatesListQueryParams;
}
export declare class ExtrasExportTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    extrasExportTemplatesList200ApplicationJsonObject?: ExtrasExportTemplatesList200ApplicationJson;
}
