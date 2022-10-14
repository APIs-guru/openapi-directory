package operations

import (
	"openapi/pkg/models/shared"
)

type PutCoursesContentIDMetadataCategoryPathParams struct {
	ContentID string `pathParam:"style=simple,explode=false,name=contentId"`
}

type PutCoursesContentIDMetadataCategoryRequestBody struct {
	Category *string `json:"category,omitempty"`
}

type PutCoursesContentIDMetadataCategoryRequest struct {
	PathParams PutCoursesContentIDMetadataCategoryPathParams
	Request    PutCoursesContentIDMetadataCategoryRequestBody `request:"mediaType=application/json"`
}

type PutCoursesContentIDMetadataCategoryResponse struct {
	ContentType        string
	CourseMetaResponse *shared.CourseMetaResponse
	Error              *shared.Error
	StatusCode         int64
}
