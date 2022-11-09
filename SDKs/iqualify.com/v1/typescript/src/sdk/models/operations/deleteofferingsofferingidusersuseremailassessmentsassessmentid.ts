import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams;
}


export class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
