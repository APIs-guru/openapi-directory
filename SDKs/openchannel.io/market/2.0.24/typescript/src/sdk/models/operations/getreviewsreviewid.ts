import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReviewsReviewIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class GetReviewsReviewIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReviewsReviewIdPathParams;
}


export class GetReviewsReviewIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
