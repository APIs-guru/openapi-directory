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
	Version *float64 `json:"version,omitempty"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetAllProperties struct {
	Description *string                  `json:"description,omitempty"`
	Name        *string                  `json:"name,omitempty"`
	Properties  []map[string]interface{} `json:"properties,omitempty"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOn struct {
	GroupID    *int64 `json:"groupID,omitempty"`
	TaxonomyID *int64 `json:"taxonomyID,omitempty"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortEditors struct {
	GroupID    *int64 `json:"groupID,omitempty"`
	TaxonomyID *int64 `json:"taxonomyID,omitempty"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOff struct {
	GroupID    *int64 `json:"groupID,omitempty"`
	TaxonomyID *int64 `json:"taxonomyID,omitempty"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetProperties struct {
	AutomoderationOn       *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOn       `json:"automoderation-on,omitempty"`
	CommentListSortEditors *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortEditors `json:"comment-list-sort-editors,omitempty"`
	ReachedMaxComOff       *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOff       `json:"reached-max-com-off,omitempty"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsCommentsAsset struct {
	AllProperties []GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetAllProperties `json:"all-properties,omitempty"`
	AssetID       *int64                                                                        `json:"assetID,omitempty"`
	AssetTitle    *string                                                                       `json:"assetTitle,omitempty"`
	AssetURL      *string                                                                       `json:"assetURL,omitempty"`
	CreateDate    *string                                                                       `json:"createDate,omitempty"`
	Labels        []map[string]interface{}                                                      `json:"labels,omitempty"`
	Properties    *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAssetProperties     `json:"properties,omitempty"`
	Source        *string                                                                       `json:"source,omitempty"`
	Taxonomy      *string                                                                       `json:"taxonomy,omitempty"`
	Text          []map[string]interface{}                                                      `json:"text,omitempty"`
	UpdateDate    *string                                                                       `json:"updateDate,omitempty"`
	VendorID      *string                                                                       `json:"vendorID,omitempty"`
}

type GetUserContentRecentJSON200ApplicationJSONResultsComments struct {
	ApproveDate         *string                                                         `json:"approveDate,omitempty"`
	Asset               *GetUserContentRecentJSON200ApplicationJSONResultsCommentsAsset `json:"asset,omitempty"`
	AssetID             *int64                                                          `json:"assetID,omitempty"`
	CommentBody         *string                                                         `json:"commentBody,omitempty"`
	CommentID           *int64                                                          `json:"commentID,omitempty"`
	CommentSequence     *int64                                                          `json:"commentSequence,omitempty"`
	CommentTitle        *string                                                         `json:"commentTitle,omitempty"`
	CommentType         *string                                                         `json:"commentType,omitempty"`
	CreateDate          *string                                                         `json:"createDate,omitempty"`
	DisplayName         *string                                                         `json:"display_name,omitempty"`
	EditorsSelection    *int64                                                          `json:"editorsSelection,omitempty"`
	Location            *string                                                         `json:"location,omitempty"`
	ParentID            *interface{}                                                    `json:"parentID,omitempty"`
	RecommendationCount *int64                                                          `json:"recommendationCount,omitempty"`
	Replies             []map[string]interface{}                                        `json:"replies,omitempty"`
	Status              *string                                                         `json:"status,omitempty"`
	StatusID            *int64                                                          `json:"statusID,omitempty"`
	UpdateDate          *string                                                         `json:"updateDate,omitempty"`
	UserDisplayName     *string                                                         `json:"userDisplayName,omitempty"`
	UserID              *int64                                                          `json:"userID,omitempty"`
	UserLocation        *string                                                         `json:"userLocation,omitempty"`
	UserTitle           *string                                                         `json:"userTitle,omitempty"`
	UserURL             *string                                                         `json:"userURL,omitempty"`
}

type GetUserContentRecentJSON200ApplicationJSONResults struct {
	APITimestamp          *string                                                     `json:"api_timestamp,omitempty"`
	Comments              []GetUserContentRecentJSON200ApplicationJSONResultsComments `json:"comments,omitempty"`
	TotalCommentsReturned *int64                                                      `json:"totalCommentsReturned,omitempty"`
}

type GetUserContentRecentJSON200ApplicationJSON struct {
	Copyright *string                                            `json:"copyright,omitempty"`
	Debug     *GetUserContentRecentJSON200ApplicationJSONDebug   `json:"debug,omitempty"`
	Results   *GetUserContentRecentJSON200ApplicationJSONResults `json:"results,omitempty"`
	Status    *string                                            `json:"status,omitempty"`
}

type GetUserContentRecentJSONResponse struct {
	ContentType                                      string
	GetUserContentRecentJSON200ApplicationJSONObject *GetUserContentRecentJSON200ApplicationJSON
	StatusCode                                       int64
}
