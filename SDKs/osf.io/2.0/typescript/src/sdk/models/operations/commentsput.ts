import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommentsPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: string;
}


export class CommentsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CommentsPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CommentsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
