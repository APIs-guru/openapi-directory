import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsPathParams;
}


export class GetOfferingsOfferingIdAnalyticsSubmissionsAssignmentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AssignmentMarkResponse })
  assignmentMarkResponses?: shared.AssignmentMarkResponse[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
