import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostTranslateRequest extends SpeakeasyBase {
    request?: string;
}
export declare class PostTranslateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
