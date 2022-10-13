package operations

import (
	"openapi/pkg/models/shared"
)

type PostLifecycleOneToOneHeaders struct {
	Token *string `header:"name=Token"`
}

type PostLifecycleOneToOneRequests struct {
	LifecycleOneToOneRequest  *shared.LifecycleOneToOneRequest `request:"mediaType=application/*+json"`
	LifecycleOneToOneRequest1 *shared.LifecycleOneToOneRequest `request:"mediaType=application/json"`
	LifecycleOneToOneRequest2 *shared.LifecycleOneToOneRequest `request:"mediaType=text/json"`
}

type PostLifecycleOneToOneRequest struct {
	Headers PostLifecycleOneToOneHeaders
	Request *PostLifecycleOneToOneRequests
}

type PostLifecycleOneToOneResponse struct {
	Body                 []byte
	ContentType          string
	PlanningLevelDataDto *shared.PlanningLevelDataDto
	StatusCode           int64
}
