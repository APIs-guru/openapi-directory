import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteReviewsReviewIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class DeleteReviewsReviewIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userAccountId" })
  userAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class DeleteReviewsReviewIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteReviewsReviewIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteReviewsReviewIdQueryParams;
}


export class DeleteReviewsReviewIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
