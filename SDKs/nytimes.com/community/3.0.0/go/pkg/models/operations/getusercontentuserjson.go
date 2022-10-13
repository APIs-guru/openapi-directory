package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserContentUserJSONQueryParams struct {
	UserID *int64 `queryParam:"style=form,explode=true,name=userID"`
}

type GetUserContentUserJSONSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type GetUserContentUserJSONRequest struct {
	QueryParams GetUserContentUserJSONQueryParams
	Security    GetUserContentUserJSONSecurity
}

type GetUserContentUserJSON200ApplicationJSONDebug struct {
	Version *float64 `json:"version"`
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetAllProperties struct {
	Description *string                  `json:"description"`
	Name        *string                  `json:"name"`
	Properties  []map[string]interface{} `json:"properties"`
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetLabels struct {
	LabelID   *int64  `json:"labelID"`
	LabelName *string `json:"labelName"`
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff struct {
	GroupID    *int64 `json:"groupID"`
	TaxonomyID *int64 `json:"taxonomyID"`
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc struct {
	GroupID    *int64 `json:"groupID"`
	TaxonomyID *int64 `json:"taxonomyID"`
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn struct {
	GroupID    *int64 `json:"groupID"`
	TaxonomyID *int64 `json:"taxonomyID"`
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetProperties struct {
	AutomoderationOff              *GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff              `json:"automoderation-off"`
	CommentListSortApprovedateDesc *GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc `json:"comment-list-sort-approvedate-desc"`
	ReachedMaxComOn                *GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn                `json:"reached-max-com-on"`
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAsset struct {
	AllProperties []GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetAllProperties `json:"all-properties"`
	AssetID       *int64                                                                      `json:"assetID"`
	AssetTitle    *string                                                                     `json:"assetTitle"`
	AssetURL      *string                                                                     `json:"assetURL"`
	CreateDate    *string                                                                     `json:"createDate"`
	Labels        []GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetLabels        `json:"labels"`
	Properties    *GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetProperties     `json:"properties"`
	Source        *string                                                                     `json:"source"`
	Taxonomy      *string                                                                     `json:"taxonomy"`
	Text          []map[string]interface{}                                                    `json:"text"`
	UpdateDate    *string                                                                     `json:"updateDate"`
	VendorID      *string                                                                     `json:"vendorID"`
}

type GetUserContentUserJSON200ApplicationJSONResultsComments struct {
	ApproveDate              *string                                                       `json:"approveDate"`
	Asset                    *GetUserContentUserJSON200ApplicationJSONResultsCommentsAsset `json:"asset"`
	CommentBody              *string                                                       `json:"commentBody"`
	CommentID                *int64                                                        `json:"commentID"`
	CommentSequence          *int64                                                        `json:"commentSequence"`
	CommentTitle             *string                                                       `json:"commentTitle"`
	CommentType              *string                                                       `json:"commentType"`
	CreateDate               *string                                                       `json:"createDate"`
	EditorsSelection         *bool                                                         `json:"editorsSelection"`
	Labels                   []map[string]interface{}                                      `json:"labels"`
	ParentID                 *interface{}                                                  `json:"parentID"`
	Permid                   *int64                                                        `json:"permid"`
	PicURL                   *string                                                       `json:"picURL"`
	Recommendations          *int64                                                        `json:"recommendations"`
	Replies                  []map[string]interface{}                                      `json:"replies"`
	ReplyCount               *int64                                                        `json:"replyCount"`
	Status                   *string                                                       `json:"status"`
	UpdateDate               *string                                                       `json:"updateDate"`
	UserDisplayName          *interface{}                                                  `json:"userDisplayName"`
	UserID                   *int64                                                        `json:"userID"`
	UserLocation             *interface{}                                                  `json:"userLocation"`
	UserSubmittedDisplayName *string                                                       `json:"userSubmittedDisplayName"`
	UserSubmittedLocation    *string                                                       `json:"userSubmittedLocation"`
	UserSubmittedTitle       *interface{}                                                  `json:"userSubmittedTitle"`
	UserSubmittedURL         *interface{}                                                  `json:"userSubmittedURL"`
	UserTitle                *interface{}                                                  `json:"userTitle"`
	UserURL                  *interface{}                                                  `json:"userURL"`
}

type GetUserContentUserJSON200ApplicationJSONResults struct {
	APITimestamp          *string                                                   `json:"api_timestamp"`
	Comments              []GetUserContentUserJSON200ApplicationJSONResultsComments `json:"comments"`
	TotalCommentsFound    *int64                                                    `json:"totalCommentsFound"`
	TotalCommentsReturned *int64                                                    `json:"totalCommentsReturned"`
}

type GetUserContentUserJSON200ApplicationJSON struct {
	Copyright *string                                          `json:"copyright"`
	Debug     *GetUserContentUserJSON200ApplicationJSONDebug   `json:"debug"`
	Results   *GetUserContentUserJSON200ApplicationJSONResults `json:"results"`
	Status    *string                                          `json:"status"`
}

type GetUserContentUserJSONResponse struct {
	ContentType                                    string
	GetUserContentUserJSON200ApplicationJSONObject *GetUserContentUserJSON200ApplicationJSON
	StatusCode                                     int64
}
