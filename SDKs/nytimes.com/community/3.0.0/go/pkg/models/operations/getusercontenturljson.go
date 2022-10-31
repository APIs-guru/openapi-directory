package operations

import (
"openapi/pkg/models/shared")

type GetUserContentURLJSONQueryParams struct {
    URL *string `queryParam:"style=form,explode=true,name=url"`
    
}

type GetUserContentURLJSONSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetUserContentURLJSONRequest struct {
    QueryParams GetUserContentURLJSONQueryParams 
    Security GetUserContentURLJSONSecurity 
    
}

type GetUserContentURLJSON200ApplicationJSONDebug struct {
    Version *float64 `json:"version,omitempty"`
    
}

type GetUserContentURLJSON200ApplicationJSONResultsComments struct {
    ApproveDate *string `json:"approveDate,omitempty"`
    CommentBody *string `json:"commentBody,omitempty"`
    CommentID *int64 `json:"commentID,omitempty"`
    CommentSequence *int64 `json:"commentSequence,omitempty"`
    CommentTitle *string `json:"commentTitle,omitempty"`
    CommentType *string `json:"commentType,omitempty"`
    CreateDate *string `json:"createDate,omitempty"`
    Depth *int64 `json:"depth,omitempty"`
    EditorsSelection *bool `json:"editorsSelection,omitempty"`
    ParentID *interface{} `json:"parentID,omitempty"`
    ParentUserDisplayName *interface{} `json:"parentUserDisplayName,omitempty"`
    PermID *string `json:"permID,omitempty"`
    PicURL *string `json:"picURL,omitempty"`
    Recommendations *int64 `json:"recommendations,omitempty"`
    RecommendedFlag *interface{} `json:"recommendedFlag,omitempty"`
    Replies []interface{} `json:"replies,omitempty"`
    ReplyCount *int64 `json:"replyCount,omitempty"`
    ReportAbuseFlag *interface{} `json:"reportAbuseFlag,omitempty"`
    Sharing *int64 `json:"sharing,omitempty"`
    Status *string `json:"status,omitempty"`
    Timespeople *int64 `json:"timespeople,omitempty"`
    Trusted *int64 `json:"trusted,omitempty"`
    UpdateDate *string `json:"updateDate,omitempty"`
    UserDisplayName *string `json:"userDisplayName,omitempty"`
    UserID *int64 `json:"userID,omitempty"`
    UserLocation *string `json:"userLocation,omitempty"`
    UserTitle *interface{} `json:"userTitle,omitempty"`
    UserURL *interface{} `json:"userURL,omitempty"`
    
}

type GetUserContentURLJSON200ApplicationJSONResults struct {
    APITimestamp *string `json:"api_timestamp,omitempty"`
    CallerID *interface{} `json:"callerID,omitempty"`
    Comments []GetUserContentURLJSON200ApplicationJSONResultsComments `json:"comments,omitempty"`
    DepthLimit *int64 `json:"depthLimit,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Page *int64 `json:"page,omitempty"`
    ReplyLimit *int64 `json:"replyLimit,omitempty"`
    Sort *string `json:"sort,omitempty"`
    TotalCommentsFound *int64 `json:"totalCommentsFound,omitempty"`
    TotalCommentsReturned *int64 `json:"totalCommentsReturned,omitempty"`
    TotalEditorsSelectionFound *int64 `json:"totalEditorsSelectionFound,omitempty"`
    TotalEditorsSelectionReturned *int64 `json:"totalEditorsSelectionReturned,omitempty"`
    TotalParentCommentsFound *int64 `json:"totalParentCommentsFound,omitempty"`
    TotalParentCommentsReturned *int64 `json:"totalParentCommentsReturned,omitempty"`
    TotalRecommendationsFound *int64 `json:"totalRecommendationsFound,omitempty"`
    TotalRecommendationsReturned *int64 `json:"totalRecommendationsReturned,omitempty"`
    TotalReplyCommentsFound *int64 `json:"totalReplyCommentsFound,omitempty"`
    TotalReplyCommentsReturned *int64 `json:"totalReplyCommentsReturned,omitempty"`
    TotalReporterReplyCommentsFound *int64 `json:"totalReporterReplyCommentsFound,omitempty"`
    TotalReporterReplyCommentsReturned *int64 `json:"totalReporterReplyCommentsReturned,omitempty"`
    
}

type GetUserContentURLJSON200ApplicationJSON struct {
    Copyright *string `json:"copyright,omitempty"`
    Debug *GetUserContentURLJSON200ApplicationJSONDebug `json:"debug,omitempty"`
    Results *GetUserContentURLJSON200ApplicationJSONResults `json:"results,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type GetUserContentURLJSONResponse struct {
    ContentType string 
    GetUserContentURLJSON200ApplicationJSONObject *GetUserContentURLJSON200ApplicationJSON 
    StatusCode int64 
    
}

