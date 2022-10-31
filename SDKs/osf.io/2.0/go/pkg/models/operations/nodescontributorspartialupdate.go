package operations



type NodesContributorsPartialUpdatePathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    UserID string `pathParam:"style=simple,explode=false,name=user_id"`
    
}


type NodesContributorsPartialUpdateContributorAttributesPermissionEnum string

const (
    NodesContributorsPartialUpdateContributorAttributesPermissionEnumRead NodesContributorsPartialUpdateContributorAttributesPermissionEnum = "read"
NodesContributorsPartialUpdateContributorAttributesPermissionEnumWrite NodesContributorsPartialUpdateContributorAttributesPermissionEnum = "write"
NodesContributorsPartialUpdateContributorAttributesPermissionEnumAdmin NodesContributorsPartialUpdateContributorAttributesPermissionEnum = "admin"
)


type NodesContributorsPartialUpdateContributorAttributes struct {
    Bibliographic *bool `json:"bibliographic,omitempty"`
    Index *int64 `json:"index,omitempty"`
    Permission *NodesContributorsPartialUpdateContributorAttributesPermissionEnum `json:"permission,omitempty"`
    UnregisteredContributor *string `json:"unregistered_contributor,omitempty"`
    
}

type NodesContributorsPartialUpdateContributorLinks struct {
    Self *string `json:"self,omitempty"`
    
}

type NodesContributorsPartialUpdateContributorRelationships struct {
    Node string `json:"node"`
    User string `json:"user"`
    
}

type NodesContributorsPartialUpdateContributor struct {
    Attributes *NodesContributorsPartialUpdateContributorAttributes `json:"attributes,omitempty"`
    ID *string `json:"id,omitempty"`
    Links *NodesContributorsPartialUpdateContributorLinks `json:"links,omitempty"`
    Relationships NodesContributorsPartialUpdateContributorRelationships `json:"relationships"`
    Type string `json:"type"`
    
}

type NodesContributorsPartialUpdateRequest struct {
    PathParams NodesContributorsPartialUpdatePathParams 
    Request NodesContributorsPartialUpdateContributor `request:"mediaType=application/json"`
    
}

type NodesContributorsPartialUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

