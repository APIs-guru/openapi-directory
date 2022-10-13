package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvestigationResultsPathParams struct {
	Db shared.AmbitDatabaseIDEnum `pathParam:"style=simple,explode=false,name=db"`
}

type GetInvestigationResultsTypeEnum string

const (
	GetInvestigationResultsTypeEnumByinvestigation     GetInvestigationResultsTypeEnum = "byinvestigation"
	GetInvestigationResultsTypeEnumByassay             GetInvestigationResultsTypeEnum = "byassay"
	GetInvestigationResultsTypeEnumBysubstance         GetInvestigationResultsTypeEnum = "bysubstance"
	GetInvestigationResultsTypeEnumByprovider          GetInvestigationResultsTypeEnum = "byprovider"
	GetInvestigationResultsTypeEnumBycitation          GetInvestigationResultsTypeEnum = "bycitation"
	GetInvestigationResultsTypeEnumBystudytype         GetInvestigationResultsTypeEnum = "bystudytype"
	GetInvestigationResultsTypeEnumBystructureInchikey GetInvestigationResultsTypeEnum = "bystructure_inchikey"
	GetInvestigationResultsTypeEnumBystructureSmiles   GetInvestigationResultsTypeEnum = "bystructure_smiles"
	GetInvestigationResultsTypeEnumBystructureName     GetInvestigationResultsTypeEnum = "bystructure_name"
	GetInvestigationResultsTypeEnumBysubstanceName     GetInvestigationResultsTypeEnum = "bysubstance_name"
	GetInvestigationResultsTypeEnumBysubstanceType     GetInvestigationResultsTypeEnum = "bysubstance_type"
)

type GetInvestigationResultsQueryParams struct {
	ID       *string                         `queryParam:"style=form,explode=true,name=id"`
	Inchikey *string                         `queryParam:"style=form,explode=true,name=inchikey"`
	Page     *int64                          `queryParam:"style=form,explode=true,name=page"`
	Pagesize *int64                          `queryParam:"style=form,explode=true,name=pagesize"`
	Search   string                          `queryParam:"style=form,explode=true,name=search"`
	Type     GetInvestigationResultsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetInvestigationResultsRequest struct {
	PathParams  GetInvestigationResultsPathParams
	QueryParams GetInvestigationResultsQueryParams
}

type GetInvestigationResultsResponse struct {
	Body          []byte
	ContentType   string
	Investigation *shared.Investigation
	StatusCode    int64
}
