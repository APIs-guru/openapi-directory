import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostReviewsReviewIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class PostReviewsReviewIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=description" })
  description: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=headline" })
  headline: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userAccountId" })
  userAccountId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PostReviewsReviewIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostReviewsReviewIdPathParams;

  @Metadata()
  queryParams: PostReviewsReviewIdQueryParams;
}


export class PostReviewsReviewIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
