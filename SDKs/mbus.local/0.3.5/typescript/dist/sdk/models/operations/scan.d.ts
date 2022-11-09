import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ScanPathParams extends SpeakeasyBase {
    baudrate: number;
    device: string;
}
export declare class ScanRequest extends SpeakeasyBase {
    pathParams: ScanPathParams;
}
export declare class ScanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    slaves?: string;
    textError?: string;
}
