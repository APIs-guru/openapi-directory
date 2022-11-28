import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesCommentCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


// NodesCommentCreateCommentAttributesInput
/** 
 * The properties of the comment entity.
**/
export class NodesCommentCreateCommentAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;
}


export class NodesCommentCreateCommentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: NodesCommentCreateCommentAttributesInput;
}


export class NodesCommentCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesCommentCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: NodesCommentCreateCommentInput;
}


export class NodesCommentCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
