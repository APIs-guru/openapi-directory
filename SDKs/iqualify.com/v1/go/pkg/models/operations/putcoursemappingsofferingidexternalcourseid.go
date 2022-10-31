package operations

import (
	"openapi/pkg/models/shared"
)

type PutCourseMappingsOfferingIDExternalCourseIDPathParams struct {
	ExternalCourseID string `pathParam:"style=simple,explode=false,name=externalCourseId"`
	OfferingID       string `pathParam:"style=simple,explode=false,name=offeringId"`
}

type PutCourseMappingsOfferingIDExternalCourseIDRequest struct {
	PathParams PutCourseMappingsOfferingIDExternalCourseIDPathParams
}

type PutCourseMappingsOfferingIDExternalCourseIDResponse struct {
	ContentType                                                          string
	Error                                                                *shared.Error
	PutCourseMappingsOfferingIDExternalCourseID200ApplicationJSONStrings []string
	StatusCode                                                           int64
}
