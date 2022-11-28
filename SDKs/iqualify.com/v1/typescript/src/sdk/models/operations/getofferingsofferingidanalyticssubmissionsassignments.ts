import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsPathParams;
}


export class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssignmentMarkResponse })
  assignmentMarkResponses?: shared.AssignmentMarkResponse[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
