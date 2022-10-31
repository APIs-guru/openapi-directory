package operations



type GetAssociationFilterQueryParams struct {
    Datasource *string `queryParam:"style=form,explode=true,name=datasource"`
    Datastructure *string `queryParam:"style=form,explode=true,name=datastructure"`
    Datatype *string `queryParam:"style=form,explode=true,name=datatype"`
    Direct *bool `queryParam:"style=form,explode=true,name=direct"`
    Disease *string `queryParam:"style=form,explode=true,name=disease"`
    Facets *bool `queryParam:"style=form,explode=true,name=facets"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Format *string `queryParam:"style=form,explode=true,name=format"`
    From *float64 `queryParam:"style=form,explode=true,name=from"`
    Pathway *string `queryParam:"style=form,explode=true,name=pathway"`
    ScorevalueMax *float32 `queryParam:"style=form,explode=true,name=scorevalue_max"`
    ScorevalueMin *float32 `queryParam:"style=form,explode=true,name=scorevalue_min"`
    ScorevalueTypes *string `queryParam:"style=form,explode=true,name=scorevalue_types"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    Size *float64 `queryParam:"style=form,explode=true,name=size"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Target *string `queryParam:"style=form,explode=true,name=target"`
    TargetClass *string `queryParam:"style=form,explode=true,name=target_class"`
    TherapeuticArea *string `queryParam:"style=form,explode=true,name=therapeutic_area"`
    Uniprotkw *string `queryParam:"style=form,explode=true,name=uniprotkw"`
    
}

type GetAssociationFilterRequest struct {
    QueryParams GetAssociationFilterQueryParams 
    
}

type GetAssociationFilterResponse struct {
    ContentType string 
    StatusCode int64 
    
}

