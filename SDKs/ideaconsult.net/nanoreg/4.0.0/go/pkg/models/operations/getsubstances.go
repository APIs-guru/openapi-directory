package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubstancesPathParams struct {
	Db shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
}

type GetSubstancesTypeEnum string

const (
	GetSubstancesTypeEnumSubstancetype    GetSubstancesTypeEnum = "substancetype"
	GetSubstancesTypeEnumName             GetSubstancesTypeEnum = "name"
	GetSubstancesTypeEnumLike             GetSubstancesTypeEnum = "like"
	GetSubstancesTypeEnumRegexp           GetSubstancesTypeEnum = "regexp"
	GetSubstancesTypeEnumUuif             GetSubstancesTypeEnum = "uuif"
	GetSubstancesTypeEnumCompTox          GetSubstancesTypeEnum = "CompTox"
	GetSubstancesTypeEnumDoi              GetSubstancesTypeEnum = "DOI"
	GetSubstancesTypeEnumReliability      GetSubstancesTypeEnum = "reliability"
	GetSubstancesTypeEnumPurposeFlag      GetSubstancesTypeEnum = "purposeFlag"
	GetSubstancesTypeEnumStudyResultType  GetSubstancesTypeEnum = "studyResultType"
	GetSubstancesTypeEnumIsRobustStudy    GetSubstancesTypeEnum = "isRobustStudy"
	GetSubstancesTypeEnumCitation         GetSubstancesTypeEnum = "citation"
	GetSubstancesTypeEnumCitationowner    GetSubstancesTypeEnum = "citationowner"
	GetSubstancesTypeEnumTopcategory      GetSubstancesTypeEnum = "topcategory"
	GetSubstancesTypeEnumEndpointcategory GetSubstancesTypeEnum = "endpointcategory"
	GetSubstancesTypeEnumParams           GetSubstancesTypeEnum = "params"
	GetSubstancesTypeEnumOwnerName        GetSubstancesTypeEnum = "owner_name"
	GetSubstancesTypeEnumOwnerUUID        GetSubstancesTypeEnum = "owner_uuid"
	GetSubstancesTypeEnumRelated          GetSubstancesTypeEnum = "related"
	GetSubstancesTypeEnumReference        GetSubstancesTypeEnum = "reference"
	GetSubstancesTypeEnumFacet            GetSubstancesTypeEnum = "facet"
)

type GetSubstancesQueryParams struct {
	AddDummySubstance *bool                  `queryParam:"style=form,explode=true,name=addDummySubstance"`
	BundleURI         *string                `queryParam:"style=form,explode=true,name=bundle_uri"`
	CompoundURI       *string                `queryParam:"style=form,explode=true,name=compound_uri"`
	Page              *int64                 `queryParam:"style=form,explode=true,name=page"`
	Pagesize          *int64                 `queryParam:"style=form,explode=true,name=pagesize"`
	Search            *string                `queryParam:"style=form,explode=true,name=search"`
	Studysummary      *bool                  `queryParam:"style=form,explode=true,name=studysummary"`
	Type              *GetSubstancesTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetSubstancesRequest struct {
	PathParams  GetSubstancesPathParams
	QueryParams GetSubstancesQueryParams
}

type GetSubstancesResponse struct {
	ContentType string
	StatusCode  int64
	Substance   *shared.Substance
}
