import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommentsReadPathParams extends SpeakeasyBase {
    commentId: string;
}
export declare class CommentsReadRequest extends SpeakeasyBase {
    pathParams: CommentsReadPathParams;
}
export declare class CommentsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
