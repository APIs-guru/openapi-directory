package operations

import (
	"openapi/pkg/models/shared"
)

type SearchByIdentifierRepresentationEnum string

const (
	SearchByIdentifierRepresentationEnumAll         SearchByIdentifierRepresentationEnum = "all"
	SearchByIdentifierRepresentationEnumSmiles      SearchByIdentifierRepresentationEnum = "smiles"
	SearchByIdentifierRepresentationEnumReach       SearchByIdentifierRepresentationEnum = "reach"
	SearchByIdentifierRepresentationEnumStdinchi    SearchByIdentifierRepresentationEnum = "stdinchi"
	SearchByIdentifierRepresentationEnumStdinchikey SearchByIdentifierRepresentationEnum = "stdinchikey"
	SearchByIdentifierRepresentationEnumNames       SearchByIdentifierRepresentationEnum = "names"
	SearchByIdentifierRepresentationEnumIupacName   SearchByIdentifierRepresentationEnum = "iupac_name"
	SearchByIdentifierRepresentationEnumSynonym     SearchByIdentifierRepresentationEnum = "synonym"
	SearchByIdentifierRepresentationEnumCas         SearchByIdentifierRepresentationEnum = "cas"
	SearchByIdentifierRepresentationEnumEinecs      SearchByIdentifierRepresentationEnum = "einecs"
)

type SearchByIdentifierTermEnum string

const (
	SearchByIdentifierTermEnumSearch   SearchByIdentifierTermEnum = "search"
	SearchByIdentifierTermEnumURL      SearchByIdentifierTermEnum = "url"
	SearchByIdentifierTermEnumInchikey SearchByIdentifierTermEnum = "inchikey"
)

type SearchByIdentifierPathParams struct {
	Db             shared.AmbitDatabaseIDEnum           `pathParam:"style=simple,explode=false,name=db"`
	Representation SearchByIdentifierRepresentationEnum `pathParam:"style=simple,explode=false,name=representation"`
	Term           SearchByIdentifierTermEnum           `pathParam:"style=simple,explode=false,name=term"`
}

type SearchByIdentifierQueryParams struct {
	B64search *string `queryParam:"style=form,explode=true,name=b64search"`
	BundleURI *string `queryParam:"style=form,explode=true,name=bundle_uri"`
	Casesens  *bool   `queryParam:"style=form,explode=true,name=casesens"`
	Page      *int64  `queryParam:"style=form,explode=true,name=page"`
	Pagesize  *int64  `queryParam:"style=form,explode=true,name=pagesize"`
	Sameas    *string `queryParam:"style=form,explode=true,name=sameas"`
	Search    *string `queryParam:"style=form,explode=true,name=search"`
}

type SearchByIdentifierRequest struct {
	PathParams  SearchByIdentifierPathParams
	QueryParams SearchByIdentifierQueryParams
}

type SearchByIdentifierResponse struct {
	ContentType string
	Dataset     *shared.Dataset
	StatusCode  int64
}
