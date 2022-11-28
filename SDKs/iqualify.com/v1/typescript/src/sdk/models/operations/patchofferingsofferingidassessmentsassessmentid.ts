import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Assessment;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assessmentResponse?: shared.AssessmentResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
