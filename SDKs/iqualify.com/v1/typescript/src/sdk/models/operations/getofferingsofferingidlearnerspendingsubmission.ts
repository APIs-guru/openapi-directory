import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdLearnersPendingSubmissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=days" })
  days?: string;
}


export class GetOfferingsOfferingIdLearnersPendingSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdLearnersPendingSubmissionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOfferingsOfferingIdLearnersPendingSubmissionQueryParams;
}


export class GetOfferingsOfferingIdLearnersPendingSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssessmentPendingSubmission })
  assessmentPendingSubmissions?: shared.AssessmentPendingSubmission[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
