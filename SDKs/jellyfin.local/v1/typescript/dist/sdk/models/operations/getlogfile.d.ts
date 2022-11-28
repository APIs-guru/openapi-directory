import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLogFileQueryParams extends SpeakeasyBase {
    name: string;
}
export declare class GetLogFileSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetLogFileRequest extends SpeakeasyBase {
    queryParams: GetLogFileQueryParams;
    security: GetLogFileSecurity;
}
export declare class GetLogFileResponse extends SpeakeasyBase {
    contentType: string;
    getLogFile200TextPlainBinaryString?: Uint8Array;
    statusCode: number;
}
