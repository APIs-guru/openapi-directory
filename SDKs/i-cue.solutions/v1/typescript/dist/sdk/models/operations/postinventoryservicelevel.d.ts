import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostInventoryServiceLevelHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostInventoryServiceLevelRequest extends SpeakeasyBase {
    headers: PostInventoryServiceLevelHeaders;
}
export declare class PostInventoryServiceLevelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
