import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FullImportSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FullImportRequest extends SpeakeasyBase {
    request?: shared.ImportExport;
    security: FullImportSecurity;
}
export declare class FullImportResponse extends SpeakeasyBase {
    contentType: string;
    done?: shared.Done;
    statusCode: number;
}
