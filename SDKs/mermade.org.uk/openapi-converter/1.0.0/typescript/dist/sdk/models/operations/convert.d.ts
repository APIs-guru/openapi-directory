import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConvertRequestBodyValidateEnum {
    On = "on"
}
export declare class ConvertRequestBody extends SpeakeasyBase {
    filename?: string;
    source?: string;
    validate?: ConvertRequestBodyValidateEnum;
}
export declare class ConvertRequest extends SpeakeasyBase {
    request?: ConvertRequestBody;
}
export declare class ConvertResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    convert200ApplicationJsonAny?: any;
    convert400ApplicationJsonAny?: any;
}
