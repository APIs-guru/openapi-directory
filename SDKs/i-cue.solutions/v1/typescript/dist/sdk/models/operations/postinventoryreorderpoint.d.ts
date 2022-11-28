import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInventoryReorderPointHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostInventoryReorderPointRequest extends SpeakeasyBase {
    headers: PostInventoryReorderPointHeaders;
}
export declare class PostInventoryReorderPointResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
