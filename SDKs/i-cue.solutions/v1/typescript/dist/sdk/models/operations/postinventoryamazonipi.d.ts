import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInventoryAmazonIpiHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostInventoryAmazonIpiRequest extends SpeakeasyBase {
    headers: PostInventoryAmazonIpiHeaders;
}
export declare class PostInventoryAmazonIpiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
