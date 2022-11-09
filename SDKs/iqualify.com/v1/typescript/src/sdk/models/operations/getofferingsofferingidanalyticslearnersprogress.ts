import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAnalyticsLearnersProgressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsLearnersProgressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAnalyticsLearnersProgressPathParams;
}


export class GetOfferingsOfferingIdAnalyticsLearnersProgressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.LearnerProgressResponse })
  learnerProgressResponses?: shared.LearnerProgressResponse[];

  @Metadata()
  statusCode: number;
}
