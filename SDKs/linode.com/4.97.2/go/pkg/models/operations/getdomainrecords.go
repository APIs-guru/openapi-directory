package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainRecordsPathParams struct {
	DomainID int64 `pathParam:"style=simple,explode=false,name=domainId"`
}

type GetDomainRecordsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetDomainRecordsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetDomainRecords200ApplicationJSON struct {
	Data    []shared.DomainRecord `json:"data,omitempty"`
	Page    *int64                `json:"page,omitempty"`
	Pages   *int64                `json:"pages,omitempty"`
	Results *int64                `json:"results,omitempty"`
}

type GetDomainRecordsRequest struct {
	PathParams  GetDomainRecordsPathParams
	QueryParams GetDomainRecordsQueryParams
	Security    GetDomainRecordsSecurity
}

type GetDomainRecordsResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetDomainRecords200ApplicationJSONObject *GetDomainRecords200ApplicationJSON
}
