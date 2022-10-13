package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDPathParams struct {
	AssessmentID string `pathParam:"style=simple,explode=false,name=assessmentId"`
	DocumentID   string `pathParam:"style=simple,explode=false,name=documentId"`
	OfferingID   string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDRequest struct {
	PathParams DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDPathParams
}

type DeleteOfferingsOfferingIDAssessmentsAssessmentIDDocumentsDocumentIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
