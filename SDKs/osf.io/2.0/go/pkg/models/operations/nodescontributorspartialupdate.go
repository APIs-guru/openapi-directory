package operations

type NodesContributorsPartialUpdatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type NodesContributorsPartialUpdateContributorAttributesPermissionEnum string

const (
	NodesContributorsPartialUpdateContributorAttributesPermissionEnumRead  NodesContributorsPartialUpdateContributorAttributesPermissionEnum = "read"
	NodesContributorsPartialUpdateContributorAttributesPermissionEnumWrite NodesContributorsPartialUpdateContributorAttributesPermissionEnum = "write"
	NodesContributorsPartialUpdateContributorAttributesPermissionEnumAdmin NodesContributorsPartialUpdateContributorAttributesPermissionEnum = "admin"
)

// NodesContributorsPartialUpdateContributorAttributesInput
// The properties of the contributor entity.
type NodesContributorsPartialUpdateContributorAttributesInput struct {
	Bibliographic *bool                                                              `json:"bibliographic,omitempty"`
	Index         *int64                                                             `json:"index,omitempty"`
	Permission    *NodesContributorsPartialUpdateContributorAttributesPermissionEnum `json:"permission,omitempty"`
}

// NodesContributorsPartialUpdateContributorRelationshipsInput
// URLs to other entities or entity collections that have a relationship to the contributor entity.
type NodesContributorsPartialUpdateContributorRelationshipsInput struct {
	User string `json:"user"`
}

type NodesContributorsPartialUpdateContributorInput struct {
	Attributes    *NodesContributorsPartialUpdateContributorAttributesInput   `json:"attributes,omitempty"`
	Relationships NodesContributorsPartialUpdateContributorRelationshipsInput `json:"relationships"`
}

type NodesContributorsPartialUpdateRequest struct {
	PathParams NodesContributorsPartialUpdatePathParams
	Request    NodesContributorsPartialUpdateContributorInput `request:"mediaType=application/json"`
}

type NodesContributorsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
