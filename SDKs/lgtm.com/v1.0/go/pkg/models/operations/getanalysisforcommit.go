package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnalysisForCommitPathParams struct {
	CommitID  string `pathParam:"style=simple,explode=false,name=commit-id"`
	ProjectID int64  `pathParam:"style=simple,explode=false,name=project-id"`
}

type GetAnalysisForCommitSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetAnalysisForCommitRequest struct {
	PathParams GetAnalysisForCommitPathParams
	Security   GetAnalysisForCommitSecurity
}

type GetAnalysisForCommitResponse struct {
	ContentType string
	StatusCode  int64
	Analysis    *shared.Analysis
}
