import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAnalyticsActivitiesResponsesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAnalyticsActivitiesResponsesPathParams;
}


export class GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ActivityAttemptOpenResponse })
  activityAttemptOpenResponses?: shared.ActivityAttemptOpenResponse[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
