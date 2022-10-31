package operations

import (
	"openapi/pkg/models/shared"
)

type SearchBySmartsPathParams struct {
	Db shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
}

type SearchBySmartsTypeEnum string

const (
	SearchBySmartsTypeEnumSmiles SearchBySmartsTypeEnum = "smiles"
	SearchBySmartsTypeEnumMol    SearchBySmartsTypeEnum = "mol"
	SearchBySmartsTypeEnumURL    SearchBySmartsTypeEnum = "url"
)

type SearchBySmartsQueryParams struct {
	B64search         *string                 `queryParam:"style=form,explode=true,name=b64search"`
	BundleURI         *string                 `queryParam:"style=form,explode=true,name=bundle_uri"`
	DatasetURI        *string                 `queryParam:"style=form,explode=true,name=dataset_uri"`
	FilterBySubstance *bool                   `queryParam:"style=form,explode=true,name=filterBySubstance"`
	Mol               *bool                   `queryParam:"style=form,explode=true,name=mol"`
	Page              *int64                  `queryParam:"style=form,explode=true,name=page"`
	Pagesize          *int64                  `queryParam:"style=form,explode=true,name=pagesize"`
	Sameas            *string                 `queryParam:"style=form,explode=true,name=sameas"`
	Search            *string                 `queryParam:"style=form,explode=true,name=search"`
	Type              *SearchBySmartsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type SearchBySmartsRequest struct {
	PathParams  SearchBySmartsPathParams
	QueryParams SearchBySmartsQueryParams
}

type SearchBySmartsResponse struct {
	ContentType string
	Dataset     *shared.Dataset
	StatusCode  int64
}
