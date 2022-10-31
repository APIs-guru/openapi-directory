package operations



type NodesContributorsCreatePathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}


type NodesContributorsCreateContributorAttributesPermissionEnum string

const (
    NodesContributorsCreateContributorAttributesPermissionEnumRead NodesContributorsCreateContributorAttributesPermissionEnum = "read"
NodesContributorsCreateContributorAttributesPermissionEnumWrite NodesContributorsCreateContributorAttributesPermissionEnum = "write"
NodesContributorsCreateContributorAttributesPermissionEnumAdmin NodesContributorsCreateContributorAttributesPermissionEnum = "admin"
)


type NodesContributorsCreateContributorAttributes struct {
    Bibliographic *bool `json:"bibliographic,omitempty"`
    Index *int64 `json:"index,omitempty"`
    Permission *NodesContributorsCreateContributorAttributesPermissionEnum `json:"permission,omitempty"`
    UnregisteredContributor *string `json:"unregistered_contributor,omitempty"`
    
}

type NodesContributorsCreateContributorLinks struct {
    Self *string `json:"self,omitempty"`
    
}

type NodesContributorsCreateContributorRelationships struct {
    Node string `json:"node"`
    User string `json:"user"`
    
}

type NodesContributorsCreateContributor struct {
    Attributes *NodesContributorsCreateContributorAttributes `json:"attributes,omitempty"`
    ID *string `json:"id,omitempty"`
    Links *NodesContributorsCreateContributorLinks `json:"links,omitempty"`
    Relationships NodesContributorsCreateContributorRelationships `json:"relationships"`
    Type string `json:"type"`
    
}

type NodesContributorsCreateRequest struct {
    PathParams NodesContributorsCreatePathParams 
    Request NodesContributorsCreateContributor `request:"mediaType=application/json"`
    
}

type NodesContributorsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

