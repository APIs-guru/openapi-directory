import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAnalyticsMarksQuizzesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsMarksQuizzesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAnalyticsMarksQuizzesPathParams;
}


export class GetOfferingsOfferingIdAnalyticsMarksQuizzesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.QuizMarkResponse })
  quizMarkResponses?: shared.QuizMarkResponse[];

  @Metadata()
  statusCode: number;
}
