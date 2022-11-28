import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasExportTemplatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasExportTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasExportTemplatesUpdatePathParams;
    request: shared.ExportTemplateInput;
}
export declare class ExtrasExportTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    exportTemplate?: shared.ExportTemplate;
    statusCode: number;
}
