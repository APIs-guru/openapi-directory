package operations

import (
"openapi/pkg/models/shared")


type SolrqueryGetWtEnum string

const (
    SolrqueryGetWtEnumJSON SolrqueryGetWtEnum = "json"
SolrqueryGetWtEnumXML SolrqueryGetWtEnum = "xml"
)


type SolrqueryGetQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Rows *int64 `queryParam:"style=form,explode=true,name=rows"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    Wt *SolrqueryGetWtEnum `queryParam:"style=form,explode=true,name=wt"`
    
}

type SolrqueryGetRequest struct {
    QueryParams SolrqueryGetQueryParams 
    
}

type SolrqueryGetResponse struct {
    Body []byte 
    ContentType string 
    SolrResponse *shared.SolrResponse 
    StatusCode int64 
    
}

