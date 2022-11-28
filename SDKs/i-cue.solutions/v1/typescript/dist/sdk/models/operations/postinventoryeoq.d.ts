import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInventoryEoqHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostInventoryEoqRequest extends SpeakeasyBase {
    headers: PostInventoryEoqHeaders;
}
export declare class PostInventoryEoqResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
