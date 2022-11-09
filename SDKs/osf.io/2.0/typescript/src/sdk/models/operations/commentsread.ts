import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommentsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: string;
}


export class CommentsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CommentsReadPathParams;
}


export class CommentsReadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
