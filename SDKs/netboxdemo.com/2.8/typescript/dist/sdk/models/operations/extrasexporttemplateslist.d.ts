import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasExportTemplatesListQueryParams extends SpeakeasyBase {
    contentType?: string;
    contentTypeN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    offset?: number;
    templateLanguage?: string;
    templateLanguageN?: string;
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
