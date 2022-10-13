package operations

import (
	"openapi/pkg/models/shared"
)

type JapaneseNameMatchFeedbackLoopPathParams struct {
	JapaneseGivenNameLatin string `pathParam:"style=simple,explode=false,name=japaneseGivenNameLatin"`
	JapaneseName           string `pathParam:"style=simple,explode=false,name=japaneseName"`
	JapaneseSurnameLatin   string `pathParam:"style=simple,explode=false,name=japaneseSurnameLatin"`
}

type JapaneseNameMatchFeedbackLoopSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type JapaneseNameMatchFeedbackLoopRequest struct {
	PathParams JapaneseNameMatchFeedbackLoopPathParams
	Security   JapaneseNameMatchFeedbackLoopSecurity
}

type JapaneseNameMatchFeedbackLoopResponse struct {
	ContentType     string
	FeedbackLoopOut *shared.FeedbackLoopOut
	StatusCode      int64
}
