import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInventoryTurnsHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostInventoryTurnsRequest extends SpeakeasyBase {
    headers: PostInventoryTurnsHeaders;
}
export declare class PostInventoryTurnsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
