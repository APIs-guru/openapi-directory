import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReviewsReviewIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class GetReviewsReviewIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReviewsReviewIdPathParams;
}


export class GetReviewsReviewIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
