package operations

type NodesContributorsCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesContributorsCreateContributorAttributesPermissionEnum string

const (
	NodesContributorsCreateContributorAttributesPermissionEnumRead  NodesContributorsCreateContributorAttributesPermissionEnum = "read"
	NodesContributorsCreateContributorAttributesPermissionEnumWrite NodesContributorsCreateContributorAttributesPermissionEnum = "write"
	NodesContributorsCreateContributorAttributesPermissionEnumAdmin NodesContributorsCreateContributorAttributesPermissionEnum = "admin"
)

// NodesContributorsCreateContributorAttributesInput
// The properties of the contributor entity.
type NodesContributorsCreateContributorAttributesInput struct {
	Bibliographic *bool                                                       `json:"bibliographic,omitempty"`
	Index         *int64                                                      `json:"index,omitempty"`
	Permission    *NodesContributorsCreateContributorAttributesPermissionEnum `json:"permission,omitempty"`
}

// NodesContributorsCreateContributorRelationshipsInput
// URLs to other entities or entity collections that have a relationship to the contributor entity.
type NodesContributorsCreateContributorRelationshipsInput struct {
	User string `json:"user"`
}

type NodesContributorsCreateContributorInput struct {
	Attributes    *NodesContributorsCreateContributorAttributesInput   `json:"attributes,omitempty"`
	Relationships NodesContributorsCreateContributorRelationshipsInput `json:"relationships"`
}

type NodesContributorsCreateRequest struct {
	PathParams NodesContributorsCreatePathParams
	Request    NodesContributorsCreateContributorInput `request:"mediaType=application/json"`
}

type NodesContributorsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
