import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class KeysApiCurrentPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class KeysApiCurrentRequest extends SpeakeasyBase {
    pathParams: KeysApiCurrentPathParams;
}
export declare class KeysApiCurrentResponse extends SpeakeasyBase {
    contentType: string;
    keysApiCurrent200ApplicationJsonOneOf?: any;
    statusCode: number;
}
