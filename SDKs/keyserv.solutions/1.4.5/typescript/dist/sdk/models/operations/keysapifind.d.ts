import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class KeysApiFindPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class KeysApiFindRequest extends SpeakeasyBase {
    pathParams: KeysApiFindPathParams;
}
export declare class KeysApiFindResponse extends SpeakeasyBase {
    contentType: string;
    keysApiFind200ApplicationJsonOneOf?: any;
    statusCode: number;
}
