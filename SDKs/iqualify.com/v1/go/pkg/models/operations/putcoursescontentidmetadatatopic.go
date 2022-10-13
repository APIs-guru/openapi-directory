package operations

import (
	"openapi/pkg/models/shared"
)

type PutCoursesContentIDMetadataTopicPathParams struct {
	ContentID string `pathParam:"style=simple,explode=false,name=contentId"`
}

type PutCoursesContentIDMetadataTopicRequestBody struct {
	Topic *string `json:"topic"`
}

type PutCoursesContentIDMetadataTopicRequest struct {
	PathParams PutCoursesContentIDMetadataTopicPathParams
	Request    PutCoursesContentIDMetadataTopicRequestBody `request:"mediaType=application/json"`
}

type PutCoursesContentIDMetadataTopicResponse struct {
	ContentType        string
	CourseMetaResponse *shared.CourseMetaResponse
	Error              *shared.Error
	StatusCode         int64
}
