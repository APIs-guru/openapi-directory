import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInventoryMoqHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostInventoryMoqRequest extends SpeakeasyBase {
    headers: PostInventoryMoqHeaders;
}
export declare class PostInventoryMoqResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
