import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class KeysApiCustomPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class KeysApiCustomRequest extends SpeakeasyBase {
    pathParams: KeysApiCustomPathParams;
}
export declare class KeysApiCustomResponse extends SpeakeasyBase {
    contentType: string;
    keysApiCustom200ApplicationOctetStreamBinaryString?: Uint8Array;
    statusCode: number;
}
