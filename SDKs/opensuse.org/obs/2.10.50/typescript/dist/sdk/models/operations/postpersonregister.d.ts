import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostPersonRegisterRequest extends SpeakeasyBase {
    request: Uint8Array;
}
export declare class PostPersonRegisterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
