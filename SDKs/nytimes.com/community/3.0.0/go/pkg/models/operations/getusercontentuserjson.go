package operations

import (
"openapi/pkg/models/shared")

type GetUserContentUserJSONQueryParams struct {
    UserID *int64 `queryParam:"style=form,explode=true,name=userID"`
    
}

type GetUserContentUserJSONSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetUserContentUserJSONRequest struct {
    QueryParams GetUserContentUserJSONQueryParams 
    Security GetUserContentUserJSONSecurity 
    
}

type GetUserContentUserJSON200ApplicationJSONDebug struct {
    Version *float64 `json:"version,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetAllProperties struct {
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    Properties []map[string]interface{} `json:"properties,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetLabels struct {
    LabelID *int64 `json:"labelID,omitempty"`
    LabelName *string `json:"labelName,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff struct {
    GroupID *int64 `json:"groupID,omitempty"`
    TaxonomyID *int64 `json:"taxonomyID,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc struct {
    GroupID *int64 `json:"groupID,omitempty"`
    TaxonomyID *int64 `json:"taxonomyID,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn struct {
    GroupID *int64 `json:"groupID,omitempty"`
    TaxonomyID *int64 `json:"taxonomyID,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetProperties struct {
    AutomoderationOff *GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesAutomoderationOff `json:"automoderation-off,omitempty"`
    CommentListSortApprovedateDesc *GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesCommentListSortApprovedateDesc `json:"comment-list-sort-approvedate-desc,omitempty"`
    ReachedMaxComOn *GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetPropertiesReachedMaxComOn `json:"reached-max-com-on,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSONResultsCommentsAsset struct {
    AllProperties []GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetAllProperties `json:"all-properties,omitempty"`
    AssetID *int64 `json:"assetID,omitempty"`
    AssetTitle *string `json:"assetTitle,omitempty"`
    AssetURL *string `json:"assetURL,omitempty"`
    CreateDate *string `json:"createDate,omitempty"`
    Labels []GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetLabels `json:"labels,omitempty"`
    Properties *GetUserContentUserJSON200ApplicationJSONResultsCommentsAssetProperties `json:"properties,omitempty"`
    Source *string `json:"source,omitempty"`
    Taxonomy *string `json:"taxonomy,omitempty"`
    Text []map[string]interface{} `json:"text,omitempty"`
    UpdateDate *string `json:"updateDate,omitempty"`
    VendorID *string `json:"vendorID,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSONResultsComments struct {
    ApproveDate *string `json:"approveDate,omitempty"`
    Asset *GetUserContentUserJSON200ApplicationJSONResultsCommentsAsset `json:"asset,omitempty"`
    CommentBody *string `json:"commentBody,omitempty"`
    CommentID *int64 `json:"commentID,omitempty"`
    CommentSequence *int64 `json:"commentSequence,omitempty"`
    CommentTitle *string `json:"commentTitle,omitempty"`
    CommentType *string `json:"commentType,omitempty"`
    CreateDate *string `json:"createDate,omitempty"`
    EditorsSelection *bool `json:"editorsSelection,omitempty"`
    Labels []map[string]interface{} `json:"labels,omitempty"`
    ParentID *interface{} `json:"parentID,omitempty"`
    Permid *int64 `json:"permid,omitempty"`
    PicURL *string `json:"picURL,omitempty"`
    Recommendations *int64 `json:"recommendations,omitempty"`
    Replies []map[string]interface{} `json:"replies,omitempty"`
    ReplyCount *int64 `json:"replyCount,omitempty"`
    Status *string `json:"status,omitempty"`
    UpdateDate *string `json:"updateDate,omitempty"`
    UserDisplayName *interface{} `json:"userDisplayName,omitempty"`
    UserID *int64 `json:"userID,omitempty"`
    UserLocation *interface{} `json:"userLocation,omitempty"`
    UserSubmittedDisplayName *string `json:"userSubmittedDisplayName,omitempty"`
    UserSubmittedLocation *string `json:"userSubmittedLocation,omitempty"`
    UserSubmittedTitle *interface{} `json:"userSubmittedTitle,omitempty"`
    UserSubmittedURL *interface{} `json:"userSubmittedURL,omitempty"`
    UserTitle *interface{} `json:"userTitle,omitempty"`
    UserURL *interface{} `json:"userURL,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSONResults struct {
    APITimestamp *string `json:"api_timestamp,omitempty"`
    Comments []GetUserContentUserJSON200ApplicationJSONResultsComments `json:"comments,omitempty"`
    TotalCommentsFound *int64 `json:"totalCommentsFound,omitempty"`
    TotalCommentsReturned *int64 `json:"totalCommentsReturned,omitempty"`
    
}

type GetUserContentUserJSON200ApplicationJSON struct {
    Copyright *string `json:"copyright,omitempty"`
    Debug *GetUserContentUserJSON200ApplicationJSONDebug `json:"debug,omitempty"`
    Results *GetUserContentUserJSON200ApplicationJSONResults `json:"results,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type GetUserContentUserJSONResponse struct {
    ContentType string 
    GetUserContentUserJSON200ApplicationJSONObject *GetUserContentUserJSON200ApplicationJSON 
    StatusCode int64 
    
}

