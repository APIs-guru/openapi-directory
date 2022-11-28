import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostFilesQueryParams extends SpeakeasyBase {
    hash?: string;
    isPrivate?: boolean;
}
export declare class PostFilesRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostFilesRequestBody extends SpeakeasyBase {
    file: PostFilesRequestBodyFile;
}
export declare class PostFilesRequest extends SpeakeasyBase {
    queryParams: PostFilesQueryParams;
    request: PostFilesRequestBody;
}
export declare class PostFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
