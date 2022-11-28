import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdPathParams;
}


export class DeleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
