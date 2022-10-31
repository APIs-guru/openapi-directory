package operations

import (
"openapi/pkg/models/shared")

type SearchBySimilarityPathParams struct {
    Db shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
    
}


type SearchBySimilarityTypeEnum string

const (
    SearchBySimilarityTypeEnumSmiles SearchBySimilarityTypeEnum = "smiles"
SearchBySimilarityTypeEnumMol SearchBySimilarityTypeEnum = "mol"
SearchBySimilarityTypeEnumURL SearchBySimilarityTypeEnum = "url"
)


type SearchBySimilarityQueryParams struct {
    B64search *string `queryParam:"style=form,explode=true,name=b64search"`
    BundleURI *string `queryParam:"style=form,explode=true,name=bundle_uri"`
    DatasetURI *string `queryParam:"style=form,explode=true,name=dataset_uri"`
    FilterBySubstance *bool `queryParam:"style=form,explode=true,name=filterBySubstance"`
    Mol *bool `queryParam:"style=form,explode=true,name=mol"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Sameas *string `queryParam:"style=form,explode=true,name=sameas"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    Threshold *float64 `queryParam:"style=form,explode=true,name=threshold"`
    Type *SearchBySimilarityTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type SearchBySimilarityRequest struct {
    PathParams SearchBySimilarityPathParams 
    QueryParams SearchBySimilarityQueryParams 
    
}

type SearchBySimilarityResponse struct {
    ContentType string 
    Dataset *shared.Dataset 
    StatusCode int64 
    
}

