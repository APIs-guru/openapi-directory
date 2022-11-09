import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assessmentId" })
  assessmentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdPathParams;
}


export class DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
