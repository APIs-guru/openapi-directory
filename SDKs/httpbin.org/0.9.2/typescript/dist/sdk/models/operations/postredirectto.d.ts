import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostRedirectToRequestBody extends SpeakeasyBase {
    statusCode?: number;
    url: string;
}
export declare class PostRedirectToRequest extends SpeakeasyBase {
    request: PostRedirectToRequestBody;
}
export declare class PostRedirectToResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
