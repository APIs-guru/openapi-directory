package operations




type FindTheRelativesOfAnEntityRelationEnum string

const (
    FindTheRelativesOfAnEntityRelationEnumParent FindTheRelativesOfAnEntityRelationEnum = "parent"
FindTheRelativesOfAnEntityRelationEnumChild FindTheRelativesOfAnEntityRelationEnum = "child"
FindTheRelativesOfAnEntityRelationEnumSibling FindTheRelativesOfAnEntityRelationEnum = "sibling"
FindTheRelativesOfAnEntityRelationEnumPeer FindTheRelativesOfAnEntityRelationEnum = "peer"
)


type FindTheRelativesOfAnEntityPathParams struct {
    Relation FindTheRelativesOfAnEntityRelationEnum `pathParam:"style=simple,explode=false,name=relation"`
    
}

type FindTheRelativesOfAnEntityQueryParams struct {
    AppToken *string `queryParam:"style=form,explode=true,name=app_token"`
    EntityID string `queryParam:"style=form,explode=true,name=entity_id"`
    Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
    VariableID *string `queryParam:"style=form,explode=true,name=variable_id"`
    
}

type FindTheRelativesOfAnEntityHeaders struct {
    XAppToken *string `header:"style=simple,explode=false,name=X-App-Token"`
    
}

type FindTheRelativesOfAnEntityRequest struct {
    PathParams FindTheRelativesOfAnEntityPathParams 
    QueryParams FindTheRelativesOfAnEntityQueryParams 
    Headers FindTheRelativesOfAnEntityHeaders 
    
}

type FindTheRelativesOfAnEntityResponse struct {
    ContentType string 
    StatusCode int64 
    
}

