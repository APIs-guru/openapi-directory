package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserContentURLJSONQueryParams struct {
	URL *string `queryParam:"style=form,explode=true,name=url"`
}

type GetUserContentURLJSONSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetUserContentURLJSONRequest struct {
	QueryParams GetUserContentURLJSONQueryParams
	Security    GetUserContentURLJSONSecurity
}

type GetUserContentURLJSON200ApplicationJSONDebug struct {
	Version *float64 `json:"version"`
}

type GetUserContentURLJSON200ApplicationJSONResultsComments struct {
	ApproveDate           *string       `json:"approveDate"`
	CommentBody           *string       `json:"commentBody"`
	CommentID             *int64        `json:"commentID"`
	CommentSequence       *int64        `json:"commentSequence"`
	CommentTitle          *string       `json:"commentTitle"`
	CommentType           *string       `json:"commentType"`
	CreateDate            *string       `json:"createDate"`
	Depth                 *int64        `json:"depth"`
	EditorsSelection      *bool         `json:"editorsSelection"`
	ParentID              *interface{}  `json:"parentID"`
	ParentUserDisplayName *interface{}  `json:"parentUserDisplayName"`
	PermID                *string       `json:"permID"`
	PicURL                *string       `json:"picURL"`
	Recommendations       *int64        `json:"recommendations"`
	RecommendedFlag       *interface{}  `json:"recommendedFlag"`
	Replies               []interface{} `json:"replies"`
	ReplyCount            *int64        `json:"replyCount"`
	ReportAbuseFlag       *interface{}  `json:"reportAbuseFlag"`
	Sharing               *int64        `json:"sharing"`
	Status                *string       `json:"status"`
	Timespeople           *int64        `json:"timespeople"`
	Trusted               *int64        `json:"trusted"`
	UpdateDate            *string       `json:"updateDate"`
	UserDisplayName       *string       `json:"userDisplayName"`
	UserID                *int64        `json:"userID"`
	UserLocation          *string       `json:"userLocation"`
	UserTitle             *interface{}  `json:"userTitle"`
	UserURL               *interface{}  `json:"userURL"`
}

type GetUserContentURLJSON200ApplicationJSONResults struct {
	APITimestamp                       *string                                                  `json:"api_timestamp"`
	CallerID                           *interface{}                                             `json:"callerID"`
	Comments                           []GetUserContentURLJSON200ApplicationJSONResultsComments `json:"comments"`
	DepthLimit                         *int64                                                   `json:"depthLimit"`
	Filter                             *string                                                  `json:"filter"`
	Page                               *int64                                                   `json:"page"`
	ReplyLimit                         *int64                                                   `json:"replyLimit"`
	Sort                               *string                                                  `json:"sort"`
	TotalCommentsFound                 *int64                                                   `json:"totalCommentsFound"`
	TotalCommentsReturned              *int64                                                   `json:"totalCommentsReturned"`
	TotalEditorsSelectionFound         *int64                                                   `json:"totalEditorsSelectionFound"`
	TotalEditorsSelectionReturned      *int64                                                   `json:"totalEditorsSelectionReturned"`
	TotalParentCommentsFound           *int64                                                   `json:"totalParentCommentsFound"`
	TotalParentCommentsReturned        *int64                                                   `json:"totalParentCommentsReturned"`
	TotalRecommendationsFound          *int64                                                   `json:"totalRecommendationsFound"`
	TotalRecommendationsReturned       *int64                                                   `json:"totalRecommendationsReturned"`
	TotalReplyCommentsFound            *int64                                                   `json:"totalReplyCommentsFound"`
	TotalReplyCommentsReturned         *int64                                                   `json:"totalReplyCommentsReturned"`
	TotalReporterReplyCommentsFound    *int64                                                   `json:"totalReporterReplyCommentsFound"`
	TotalReporterReplyCommentsReturned *int64                                                   `json:"totalReporterReplyCommentsReturned"`
}

type GetUserContentURLJSON200ApplicationJSON struct {
	Copyright *string                                         `json:"copyright"`
	Debug     *GetUserContentURLJSON200ApplicationJSONDebug   `json:"debug"`
	Results   *GetUserContentURLJSON200ApplicationJSONResults `json:"results"`
	Status    *string                                         `json:"status"`
}

type GetUserContentURLJSONResponse struct {
	ContentType                                   string
	GetUserContentURLJSON200ApplicationJSONObject *GetUserContentURLJSON200ApplicationJSON
	StatusCode                                    int64
}
