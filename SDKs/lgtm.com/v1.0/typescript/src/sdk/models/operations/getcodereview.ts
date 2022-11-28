import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCodeReviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=review-id" })
  reviewId: string;
}


export class GetCodeReviewSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetCodeReviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCodeReviewPathParams;

  @SpeakeasyMetadata()
  security: GetCodeReviewSecurity;
}


export class GetCodeReviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.CodeReview })
  codeReviews?: shared.CodeReview[];
}
