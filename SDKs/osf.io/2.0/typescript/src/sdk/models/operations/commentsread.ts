import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommentsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: string;
}


export class CommentsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CommentsReadPathParams;
}


export class CommentsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
