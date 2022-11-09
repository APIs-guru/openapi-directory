import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchOfferingsOfferingIdAssessmentsAssessmentIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Assessment;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdResponse extends SpeakeasyBase {
  @Metadata()
  assessmentResponse?: shared.AssessmentResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
