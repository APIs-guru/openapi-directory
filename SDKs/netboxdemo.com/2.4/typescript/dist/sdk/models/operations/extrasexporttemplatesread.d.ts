import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasExportTemplatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasExportTemplatesReadRequest extends SpeakeasyBase {
    pathParams: ExtrasExportTemplatesReadPathParams;
}
export declare class ExtrasExportTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    exportTemplate?: shared.ExportTemplate;
    statusCode: number;
}
