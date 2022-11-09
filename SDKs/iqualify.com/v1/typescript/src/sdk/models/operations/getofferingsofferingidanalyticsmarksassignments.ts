import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAnalyticsMarksAssignmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsMarksAssignmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAnalyticsMarksAssignmentsPathParams;
}


export class GetOfferingsOfferingIdAnalyticsMarksAssignmentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AssignmentMarkResponse })
  assignmentMarkResponses?: shared.AssignmentMarkResponse[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
