package operations

import (
	"openapi/pkg/models/shared"
)

type GetCourseMappingsResponse struct {
	ContentType    string
	Error          *shared.Error
	StatusCode     int64
	CourseMappings map[string]string
}
