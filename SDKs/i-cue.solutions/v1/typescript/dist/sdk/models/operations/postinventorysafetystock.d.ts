import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInventorySafetyStockHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostInventorySafetyStockRequest extends SpeakeasyBase {
    headers: PostInventorySafetyStockHeaders;
}
export declare class PostInventorySafetyStockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
