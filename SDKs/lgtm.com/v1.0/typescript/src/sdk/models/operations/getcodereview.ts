import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCodeReviewPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=review-id" })
  reviewId: string;
}


export class GetCodeReviewSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetCodeReviewRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCodeReviewPathParams;

  @Metadata()
  security: GetCodeReviewSecurity;
}


export class GetCodeReviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.CodeReview })
  codeReviews?: shared.CodeReview[];
}
