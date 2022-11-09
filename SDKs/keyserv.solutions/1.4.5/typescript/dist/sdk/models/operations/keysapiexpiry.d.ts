import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class KeysApiExpiryPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class KeysApiExpiryRequest extends SpeakeasyBase {
    pathParams: KeysApiExpiryPathParams;
}
export declare class KeysApiExpiryResponse extends SpeakeasyBase {
    contentType: string;
    keysApiExpiry200ApplicationJsonOneOf?: any;
    statusCode: number;
}
