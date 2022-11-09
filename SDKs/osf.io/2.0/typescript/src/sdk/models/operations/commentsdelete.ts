import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommentsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: string;
}


export class CommentsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CommentsDeletePathParams;
}


export class CommentsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
