import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdPathParams extends SpeakeasyBase {
    assessmentId: string;
    documentId: string;
    offeringId: string;
}
export declare class DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRequest extends SpeakeasyBase {
    pathParams: DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdPathParams;
}
export declare class DeleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
