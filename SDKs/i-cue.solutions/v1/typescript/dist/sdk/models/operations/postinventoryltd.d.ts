import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInventoryLtdHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostInventoryLtdRequest extends SpeakeasyBase {
    headers: PostInventoryLtdHeaders;
}
export declare class PostInventoryLtdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
