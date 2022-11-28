import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostDetectRequest extends SpeakeasyBase {
    request?: string;
}
export declare class PostDetectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
