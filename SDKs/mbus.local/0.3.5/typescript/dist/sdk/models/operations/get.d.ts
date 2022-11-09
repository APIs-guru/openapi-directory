import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPathParams extends SpeakeasyBase {
    address: string;
    baudrate: number;
    device: string;
}
export declare class GetRequest extends SpeakeasyBase {
    pathParams: GetPathParams;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mbusData?: string;
    textError?: string;
}
