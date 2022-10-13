package operations

import (
	"openapi/pkg/models/shared"
)

type PutCoursesContentIDMetadataLevelPathParams struct {
	ContentID string `pathParam:"style=simple,explode=false,name=contentId"`
}

type PutCoursesContentIDMetadataLevelRequestBody struct {
	Level *string `json:"level"`
}

type PutCoursesContentIDMetadataLevelRequest struct {
	PathParams PutCoursesContentIDMetadataLevelPathParams
	Request    PutCoursesContentIDMetadataLevelRequestBody `request:"mediaType=application/json"`
}

type PutCoursesContentIDMetadataLevelResponse struct {
	ContentType        string
	CourseMetaResponse *shared.CourseMetaResponse
	Error              *shared.Error
	StatusCode         int64
}
