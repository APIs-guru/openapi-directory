import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
