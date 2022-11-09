import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteReviewsReviewIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class DeleteReviewsReviewIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userAccountId" })
  userAccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class DeleteReviewsReviewIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteReviewsReviewIdPathParams;

  @Metadata()
  queryParams: DeleteReviewsReviewIdQueryParams;
}


export class DeleteReviewsReviewIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
