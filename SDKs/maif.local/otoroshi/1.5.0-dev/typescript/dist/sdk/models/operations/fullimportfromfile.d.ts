import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FullImportFromFileSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FullImportFromFileRequest extends SpeakeasyBase {
    request?: shared.ImportExport;
    security: FullImportFromFileSecurity;
}
export declare class FullImportFromFileResponse extends SpeakeasyBase {
    contentType: string;
    done?: shared.Done;
    statusCode: number;
}
