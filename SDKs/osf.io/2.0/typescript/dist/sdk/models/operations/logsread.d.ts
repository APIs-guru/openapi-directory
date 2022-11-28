import { SpeakeasyBase } from "../../../internal/utils";
export declare class LogsReadPathParams extends SpeakeasyBase {
    logId: string;
}
export declare class LogsReadRequest extends SpeakeasyBase {
    pathParams: LogsReadPathParams;
}
export declare class LogsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
