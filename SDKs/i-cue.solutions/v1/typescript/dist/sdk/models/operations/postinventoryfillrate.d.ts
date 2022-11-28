import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInventoryFillRateHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostInventoryFillRateRequest extends SpeakeasyBase {
    headers: PostInventoryFillRateHeaders;
}
export declare class PostInventoryFillRateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
