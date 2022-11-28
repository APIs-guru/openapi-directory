import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchReviewsReviewIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class PatchReviewsReviewIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=headline" })
  headline?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userAccountId" })
  userAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class PatchReviewsReviewIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchReviewsReviewIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PatchReviewsReviewIdQueryParams;
}


export class PatchReviewsReviewIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
