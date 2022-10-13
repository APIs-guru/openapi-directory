package operations

type NodesContributorsPartialUpdatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
	UserID string `pathParam:"style=simple,explode=false,name=user_id"`
}

type NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnum string

const (
	NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnumRead  NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnum = "read"
	NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnumWrite NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnum = "write"
	NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnumAdmin NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnum = "admin"
)

type NodesContributorsPartialUpdateRequestBodyAttributesAttributes struct {
	Bibliographic           *bool                                                              `json:"bibliographic"`
	Index                   *int64                                                             `json:"index"`
	Permission              *NodesContributorsPartialUpdateRequestBodyAttributesPermissionEnum `json:"permission"`
	UnregisteredContributor *string                                                            `json:"unregistered_contributor"`
}

type NodesContributorsPartialUpdateRequestBodyLinksLinks struct {
	Self *string `json:"self"`
}

type NodesContributorsPartialUpdateRequestBodyRelationshipsRelationships struct {
	Node string `json:"node"`
	User string `json:"user"`
}

type NodesContributorsPartialUpdateRequestBodyContributor struct {
	Attributes    *NodesContributorsPartialUpdateRequestBodyAttributesAttributes      `json:"attributes"`
	ID            *string                                                             `json:"id"`
	Links         *NodesContributorsPartialUpdateRequestBodyLinksLinks                `json:"links"`
	Relationships NodesContributorsPartialUpdateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                                              `json:"type"`
}

type NodesContributorsPartialUpdateRequest struct {
	PathParams NodesContributorsPartialUpdatePathParams
	Request    NodesContributorsPartialUpdateRequestBodyContributor `request:"mediaType=application/json"`
}

type NodesContributorsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
