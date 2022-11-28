import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FullExportSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FullExportRequest extends SpeakeasyBase {
    security: FullExportSecurity;
}
export declare class FullExportResponse extends SpeakeasyBase {
    contentType: string;
    importExport?: shared.ImportExport;
    statusCode: number;
}
