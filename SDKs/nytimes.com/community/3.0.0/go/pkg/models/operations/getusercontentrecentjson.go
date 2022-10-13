package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserContentRecentJSONSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetUserContentRecentJSONRequest struct {
	Security GetUserContentRecentJSONSecurity
}

type GetUserContentRecentJSON200ApplicationJSONDebug struct {
	Version *float64 `json:"version"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetAllProperties struct {
	Description *string                  `json:"description"`
	Name        *string                  `json:"name"`
	Properties  []map[string]interface{} `json:"properties"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOn struct {
	GroupID    *int64 `json:"groupID"`
	TaxonomyID *int64 `json:"taxonomyID"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortEditors struct {
	GroupID    *int64 `json:"groupID"`
	TaxonomyID *int64 `json:"taxonomyID"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOff struct {
	GroupID    *int64 `json:"groupID"`
	TaxonomyID *int64 `json:"taxonomyID"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetProperties struct {
	AutomoderationOn       *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOn       `json:"automoderation-on"`
	CommentListSortEditors *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortEditors `json:"comment-list-sort-editors"`
	ReachedMaxComOff       *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOff       `json:"reached-max-com-off"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAsset struct {
	AllProperties []GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetAllProperties `json:"all-properties"`
	AssetID       *int64                                                                        `json:"assetID"`
	AssetTitle    *string                                                                       `json:"assetTitle"`
	AssetURL      *string                                                                       `json:"assetURL"`
	CreateDate    *string                                                                       `json:"createDate"`
	Labels        []map[string]interface{}                                                      `json:"labels"`
	Properties    *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetProperties     `json:"properties"`
	Source        *string                                                                       `json:"source"`
	Taxonomy      *string                                                                       `json:"taxonomy"`
	Text          []map[string]interface{}                                                      `json:"text"`
	UpdateDate    *string                                                                       `json:"updateDate"`
	VendorID      *string                                                                       `json:"vendorID"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsComments struct {
	ApproveDate         *string                                                         `json:"approveDate"`
	Asset               *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAsset `json:"asset"`
	AssetID             *int64                                                          `json:"assetID"`
	CommentBody         *string                                                         `json:"commentBody"`
	CommentID           *int64                                                          `json:"commentID"`
	CommentSequence     *int64                                                          `json:"commentSequence"`
	CommentTitle        *string                                                         `json:"commentTitle"`
	CommentType         *string                                                         `json:"commentType"`
	CreateDate          *string                                                         `json:"createDate"`
	DisplayName         *string                                                         `json:"display_name"`
	EditorsSelection    *int64                                                          `json:"editorsSelection"`
	Location            *string                                                         `json:"location"`
	ParentID            *interface{}                                                    `json:"parentID"`
	RecommendationCount *int64                                                          `json:"recommendationCount"`
	Replies             []map[string]interface{}                                        `json:"replies"`
	Status              *string                                                         `json:"status"`
	StatusID            *int64                                                          `json:"statusID"`
	UpdateDate          *string                                                         `json:"updateDate"`
	UserDisplayName     *string                                                         `json:"userDisplayName"`
	UserID              *int64                                                          `json:"userID"`
	UserLocation        *string                                                         `json:"userLocation"`
	UserTitle           *string                                                         `json:"userTitle"`
	UserURL             *string                                                         `json:"userURL"`
}

type GetUserContentRecentJSON200ApplicationJSONResults struct {
	APITimestamp          *string                                                     `json:"api_timestamp"`
	Comments              []GetUserContentRecentJSON200ApplicationJSONResultsComments `json:"comments"`
	TotalCommentsReturned *int64                                                      `json:"totalCommentsReturned"`
}

type GetUserContentRecentJSON200ApplicationJSON struct {
	Copyright *string                                            `json:"copyright"`
	Debug     *GetUserContentRecentJSON200ApplicationJSONDebug   `json:"debug"`
	Results   *GetUserContentRecentJSON200ApplicationJSONResults `json:"results"`
	Status    *string                                            `json:"status"`
}

type GetUserContentRecentJSONResponse struct {
	ContentType                                      string
	GetUserContentRecentJSON200ApplicationJSONObject *GetUserContentRecentJSON200ApplicationJSON
	StatusCode                                       int64
}
