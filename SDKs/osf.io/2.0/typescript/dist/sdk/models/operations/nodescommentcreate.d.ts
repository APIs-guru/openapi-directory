import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesCommentCreatePathParams extends SpeakeasyBase {
    nodeId: string;
}
/**
 * The properties of the comment entity.
**/
export declare class NodesCommentCreateCommentAttributesInput extends SpeakeasyBase {
    content?: string;
}
export declare class NodesCommentCreateCommentInput extends SpeakeasyBase {
    attributes?: NodesCommentCreateCommentAttributesInput;
}
export declare class NodesCommentCreateRequest extends SpeakeasyBase {
    pathParams: NodesCommentCreatePathParams;
    request: NodesCommentCreateCommentInput;
}
export declare class NodesCommentCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
