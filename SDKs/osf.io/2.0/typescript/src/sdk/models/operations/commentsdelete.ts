import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommentsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: string;
}


export class CommentsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CommentsDeletePathParams;
}


export class CommentsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
