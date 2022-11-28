import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasExportTemplatesCreateRequest extends SpeakeasyBase {
    request: shared.WritableExportTemplateInput;
}
export declare class ExtrasExportTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    exportTemplate?: shared.ExportTemplate;
    statusCode: number;
}
