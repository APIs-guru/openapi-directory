package operations

type NodesContributorsCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesContributorsCreateRequestBodyAttributesPermissionEnum string

const (
	NodesContributorsCreateRequestBodyAttributesPermissionEnumRead  NodesContributorsCreateRequestBodyAttributesPermissionEnum = "read"
	NodesContributorsCreateRequestBodyAttributesPermissionEnumWrite NodesContributorsCreateRequestBodyAttributesPermissionEnum = "write"
	NodesContributorsCreateRequestBodyAttributesPermissionEnumAdmin NodesContributorsCreateRequestBodyAttributesPermissionEnum = "admin"
)

type NodesContributorsCreateRequestBodyAttributesAttributes struct {
	Bibliographic           *bool                                                       `json:"bibliographic"`
	Index                   *int64                                                      `json:"index"`
	Permission              *NodesContributorsCreateRequestBodyAttributesPermissionEnum `json:"permission"`
	UnregisteredContributor *string                                                     `json:"unregistered_contributor"`
}

type NodesContributorsCreateRequestBodyLinksLinks struct {
	Self *string `json:"self"`
}

type NodesContributorsCreateRequestBodyRelationshipsRelationships struct {
	Node string `json:"node"`
	User string `json:"user"`
}

type NodesContributorsCreateRequestBodyContributor struct {
	Attributes    *NodesContributorsCreateRequestBodyAttributesAttributes      `json:"attributes"`
	ID            *string                                                      `json:"id"`
	Links         *NodesContributorsCreateRequestBodyLinksLinks                `json:"links"`
	Relationships NodesContributorsCreateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                                       `json:"type"`
}

type NodesContributorsCreateRequest struct {
	PathParams NodesContributorsCreatePathParams
	Request    NodesContributorsCreateRequestBodyContributor `request:"mediaType=application/json"`
}

type NodesContributorsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
