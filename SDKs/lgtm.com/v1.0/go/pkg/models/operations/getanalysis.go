package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnalysisPathParams struct {
	AnalysisID string `pathParam:"style=simple,explode=false,name=analysis-id"`
}

type GetAnalysisSecurity struct {
	AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetAnalysisRequest struct {
	PathParams GetAnalysisPathParams
	Security   GetAnalysisSecurity
}

type GetAnalysisResponse struct {
	ContentType string
	StatusCode  int64
	Analysis    *shared.Analysis
}
