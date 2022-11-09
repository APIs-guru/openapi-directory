import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dueDate" })
  dueDate?: Date;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRequestBody;
}


export class PatchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
