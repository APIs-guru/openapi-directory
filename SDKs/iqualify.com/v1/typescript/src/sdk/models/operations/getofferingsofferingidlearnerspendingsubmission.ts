import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdLearnersPendingSubmissionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=days" })
  days?: string;
}


export class GetOfferingsOfferingIdLearnersPendingSubmissionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdLearnersPendingSubmissionPathParams;

  @Metadata()
  queryParams: GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams;
}


export class GetOfferingsOfferingIdLearnersPendingSubmissionResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AssessmentPendingSubmission })
  assessmentPendingSubmissions?: shared.AssessmentPendingSubmission[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
