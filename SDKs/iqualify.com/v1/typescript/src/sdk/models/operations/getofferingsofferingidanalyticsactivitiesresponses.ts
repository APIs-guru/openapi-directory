import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdAnalyticsActivitiesResponsesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsActivitiesResponsesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdAnalyticsActivitiesResponsesPathParams;
}


export class GetOfferingsOfferingIdAnalyticsActivitiesResponsesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ActivityAttemptOpenResponse })
  activityAttemptOpenResponses?: shared.ActivityAttemptOpenResponse[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
