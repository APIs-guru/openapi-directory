import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAssessmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAssessmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAssessmentsPathParams;
}


export class GetOfferingsOfferingIdAssessmentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AssessmentResponse })
  assessmentResponses?: shared.AssessmentResponse[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
