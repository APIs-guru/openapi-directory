package operations

import (
	"openapi/pkg/models/shared"
)

type PutCoursesContentIDMetadataTagsPathParams struct {
	ContentID string `pathParam:"style=simple,explode=false,name=contentId"`
}

type PutCoursesContentIDMetadataTagsRequestBody struct {
	Tags []string `json:"tags"`
}

type PutCoursesContentIDMetadataTagsRequest struct {
	PathParams PutCoursesContentIDMetadataTagsPathParams
	Request    PutCoursesContentIDMetadataTagsRequestBody `request:"mediaType=application/json"`
}

type PutCoursesContentIDMetadataTagsResponse struct {
	ContentType        string
	CourseMetaResponse *shared.CourseMetaResponse
	Error              *shared.Error
	StatusCode         int64
}
