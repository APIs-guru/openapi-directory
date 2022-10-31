package operations

import (
"openapi/pkg/models/shared")

type TaxonomyClassesPathParams struct {
    ClassifierName string `pathParam:"style=simple,explode=false,name=classifierName"`
    
}

type TaxonomyClassesRequest struct {
    PathParams TaxonomyClassesPathParams 
    
}

type TaxonomyClassesResponse struct {
    APIClassifierTaxonomyOut *shared.APIClassifierTaxonomyOut 
    ContentType string 
    StatusCode int64 
    
}

