package operations

import (
	"openapi/pkg/models/shared"
)

type SetRepositoriesRequests struct {
	RepositoryInfos  []shared.RepositoryInfo `request:"mediaType=application/*+json"`
	RepositoryInfos1 []shared.RepositoryInfo `request:"mediaType=application/json"`
	RepositoryInfos2 []shared.RepositoryInfo `request:"mediaType=text/json"`
}

type SetRepositoriesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type SetRepositoriesRequest struct {
	Request  *SetRepositoriesRequests
	Security SetRepositoriesSecurity
}

type SetRepositoriesResponse struct {
	ContentType string
	StatusCode  int64
}
