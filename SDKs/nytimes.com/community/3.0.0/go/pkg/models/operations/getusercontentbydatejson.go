package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserContentByDateJSONQueryParams struct {
	Date *string `queryParam:"style=form,explode=true,name=date"`
}

type GetUserContentByDateJSONSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetUserContentByDateJSONRequest struct {
	QueryParams GetUserContentByDateJSONQueryParams
	Security    GetUserContentByDateJSONSecurity
}

type GetUserContentByDateJSON200ApplicationJSONDebug struct {
	Version *float64 `json:"version"`
}

type GetUserContentByDateJSON200ApplicationJSONResultsComments struct {
	ApproveDate         *string                  `json:"approveDate"`
	AssetID             *int64                   `json:"assetID"`
	AssetURL            *string                  `json:"assetURL"`
	CommentBody         *string                  `json:"commentBody"`
	CommentID           *int64                   `json:"commentID"`
	CommentSequence     *int64                   `json:"commentSequence"`
	CommentTitle        *string                  `json:"commentTitle"`
	CommentType         *string                  `json:"commentType"`
	CreateDate          *string                  `json:"createDate"`
	EditorsSelection    *int64                   `json:"editorsSelection"`
	Lft                 *int64                   `json:"lft"`
	ParentID            *interface{}             `json:"parentID"`
	RecommendationCount *int64                   `json:"recommendationCount"`
	Replies             []map[string]interface{} `json:"replies"`
	ReplyCount          *int64                   `json:"replyCount"`
	Rgt                 *int64                   `json:"rgt"`
	Status              *string                  `json:"status"`
	StatusID            *int64                   `json:"statusID"`
	UpdateDate          *string                  `json:"updateDate"`
	UserDisplayName     *string                  `json:"userDisplayName"`
	UserID              *int64                   `json:"userID"`
	UserLocation        *string                  `json:"userLocation"`
	UserTitle           *string                  `json:"userTitle"`
	UserURL             *int64                   `json:"userURL"`
}

type GetUserContentByDateJSON200ApplicationJSONResults struct {
	APITimestamp          *string                                                     `json:"api_timestamp"`
	Comments              []GetUserContentByDateJSON200ApplicationJSONResultsComments `json:"comments"`
	TotalCommentsFound    *int64                                                      `json:"totalCommentsFound"`
	TotalCommentsReturned *int64                                                      `json:"totalCommentsReturned"`
}

type GetUserContentByDateJSON200ApplicationJSON struct {
	Copyright *string                                            `json:"copyright"`
	Debug     *GetUserContentByDateJSON200ApplicationJSONDebug   `json:"debug"`
	Results   *GetUserContentByDateJSON200ApplicationJSONResults `json:"results"`
	Status    *string                                            `json:"status"`
}

type GetUserContentByDateJSONResponse struct {
	ContentType                                      string
	GetUserContentByDateJSON200ApplicationJSONObject *GetUserContentByDateJSON200ApplicationJSON
	StatusCode                                       int64
}
