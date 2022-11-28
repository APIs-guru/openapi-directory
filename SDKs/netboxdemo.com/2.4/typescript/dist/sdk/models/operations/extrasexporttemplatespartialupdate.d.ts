import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasExportTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasExportTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasExportTemplatesPartialUpdatePathParams;
    request: shared.ExportTemplateInput;
}
export declare class ExtrasExportTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    exportTemplate?: shared.ExportTemplate;
    statusCode: number;
}
