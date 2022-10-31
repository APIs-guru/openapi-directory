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
	Version *float64 `json:"version,omitempty"`
}

type GetUserContentByDateJSON200ApplicationJSONResultsComments struct {
	ApproveDate         *string                  `json:"approveDate,omitempty"`
	AssetID             *int64                   `json:"assetID,omitempty"`
	AssetURL            *string                  `json:"assetURL,omitempty"`
	CommentBody         *string                  `json:"commentBody,omitempty"`
	CommentID           *int64                   `json:"commentID,omitempty"`
	CommentSequence     *int64                   `json:"commentSequence,omitempty"`
	CommentTitle        *string                  `json:"commentTitle,omitempty"`
	CommentType         *string                  `json:"commentType,omitempty"`
	CreateDate          *string                  `json:"createDate,omitempty"`
	EditorsSelection    *int64                   `json:"editorsSelection,omitempty"`
	Lft                 *int64                   `json:"lft,omitempty"`
	ParentID            *interface{}             `json:"parentID,omitempty"`
	RecommendationCount *int64                   `json:"recommendationCount,omitempty"`
	Replies             []map[string]interface{} `json:"replies,omitempty"`
	ReplyCount          *int64                   `json:"replyCount,omitempty"`
	Rgt                 *int64                   `json:"rgt,omitempty"`
	Status              *string                  `json:"status,omitempty"`
	StatusID            *int64                   `json:"statusID,omitempty"`
	UpdateDate          *string                  `json:"updateDate,omitempty"`
	UserDisplayName     *string                  `json:"userDisplayName,omitempty"`
	UserID              *int64                   `json:"userID,omitempty"`
	UserLocation        *string                  `json:"userLocation,omitempty"`
	UserTitle           *string                  `json:"userTitle,omitempty"`
	UserURL             *int64                   `json:"userURL,omitempty"`
}

type GetUserContentByDateJSON200ApplicationJSONResults struct {
	APITimestamp          *string                                                     `json:"api_timestamp,omitempty"`
	Comments              []GetUserContentByDateJSON200ApplicationJSONResultsComments `json:"comments,omitempty"`
	TotalCommentsFound    *int64                                                      `json:"totalCommentsFound,omitempty"`
	TotalCommentsReturned *int64                                                      `json:"totalCommentsReturned,omitempty"`
}

type GetUserContentByDateJSON200ApplicationJSON struct {
	Copyright *string                                            `json:"copyright,omitempty"`
	Debug     *GetUserContentByDateJSON200ApplicationJSONDebug   `json:"debug,omitempty"`
	Results   *GetUserContentByDateJSON200ApplicationJSONResults `json:"results,omitempty"`
	Status    *string                                            `json:"status,omitempty"`
}

type GetUserContentByDateJSONResponse struct {
	ContentType                                      string
	GetUserContentByDateJSON200ApplicationJSONObject *GetUserContentByDateJSON200ApplicationJSON
	StatusCode                                       int64
}
