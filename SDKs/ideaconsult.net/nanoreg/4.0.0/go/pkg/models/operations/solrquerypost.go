package operations

import (
"openapi/pkg/models/shared")


type SolrqueryPostWtEnum string

const (
    SolrqueryPostWtEnumJSON SolrqueryPostWtEnum = "json"
SolrqueryPostWtEnumXML SolrqueryPostWtEnum = "xml"
)


type SolrqueryPostQueryParams struct {
    Wt *SolrqueryPostWtEnum `queryParam:"style=form,explode=true,name=wt"`
    
}

type SolrqueryPostRequestBodyParams struct {
    Fl []string `json:"fl,omitempty"`
    Rows *int64 `json:"rows,omitempty"`
    
}

type SolrqueryPostRequestBody struct {
    Facet map[string]interface{} `json:"facet,omitempty"`
    Params *SolrqueryPostRequestBodyParams `json:"params,omitempty"`
    
}

type SolrqueryPostRequest struct {
    QueryParams SolrqueryPostQueryParams 
    Request *SolrqueryPostRequestBody `request:"mediaType=application/json"`
    
}

type SolrqueryPostResponse struct {
    Body []byte 
    ContentType string 
    SolrResponse *shared.SolrResponse 
    StatusCode int64 
    
}

