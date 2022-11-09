import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommentsPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: string;
}


export class CommentsPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CommentsPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CommentsPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
