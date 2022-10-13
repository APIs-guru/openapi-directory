package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTagPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	TagID     string `pathParam:"style=simple,explode=false,name=tagId"`
}

type UpdateTagHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type UpdateTagRequests struct {
	ApplicationXML []byte      `request:"mediaType=application/xml"`
	Tag            *shared.Tag `request:"mediaType=application/json"`
	Tag1           *shared.Tag `request:"mediaType=application/x-www-form-urlencoded"`
	Tag2           *shared.Tag `request:"mediaType=text/json"`
	TextXML        []byte      `request:"mediaType=text/xml"`
}

type UpdateTagRequest struct {
	PathParams UpdateTagPathParams
	Headers    UpdateTagHeaders
	Request    UpdateTagRequests
}

type UpdateTagResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	Tag         *shared.Tag
}
