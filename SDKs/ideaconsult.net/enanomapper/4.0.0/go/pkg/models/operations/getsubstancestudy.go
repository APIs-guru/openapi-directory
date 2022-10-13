package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubstanceStudyPathParams struct {
	Db   shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
	UUID string                     `pathParam:"style=simple,explode=false,name=uuid"`
}

type GetSubstanceStudyTopEnum string

const (
	GetSubstanceStudyTopEnumPChem    GetSubstanceStudyTopEnum = "P-CHEM"
	GetSubstanceStudyTopEnumEcotox   GetSubstanceStudyTopEnum = "ECOTOX"
	GetSubstanceStudyTopEnumEnvFate  GetSubstanceStudyTopEnum = "ENV FATE"
	GetSubstanceStudyTopEnumTox      GetSubstanceStudyTopEnum = "TOX"
	GetSubstanceStudyTopEnumExposure GetSubstanceStudyTopEnum = "EXPOSURE"
)

type GetSubstanceStudyQueryParams struct {
	Category          *string                   `queryParam:"style=form,explode=true,name=category"`
	InvestigationUUID *string                   `queryParam:"style=form,explode=true,name=investigation_uuid"`
	Page              *int64                    `queryParam:"style=form,explode=true,name=page"`
	Pagesize          *int64                    `queryParam:"style=form,explode=true,name=pagesize"`
	Property          *string                   `queryParam:"style=form,explode=true,name=property"`
	PropertyURI       *string                   `queryParam:"style=form,explode=true,name=property_uri"`
	Top               *GetSubstanceStudyTopEnum `queryParam:"style=form,explode=true,name=top"`
}

type GetSubstanceStudyRequest struct {
	PathParams  GetSubstanceStudyPathParams
	QueryParams GetSubstanceStudyQueryParams
}

type GetSubstanceStudyResponse struct {
	ContentType    string
	StatusCode     int64
	SubstanceStudy *shared.SubstanceStudy
}
