import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommentsPutPathParams extends SpeakeasyBase {
    commentId: string;
}
export declare class CommentsPutRequest extends SpeakeasyBase {
    pathParams: CommentsPutPathParams;
    request: Map<string, any>;
}
export declare class CommentsPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
