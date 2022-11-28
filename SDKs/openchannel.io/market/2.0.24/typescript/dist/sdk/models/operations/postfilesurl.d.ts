import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFilesUrlQueryParams extends SpeakeasyBase {
    isPrivate?: boolean;
    url: string;
}
export declare class PostFilesUrlRequest extends SpeakeasyBase {
    queryParams: PostFilesUrlQueryParams;
}
export declare class PostFilesUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
