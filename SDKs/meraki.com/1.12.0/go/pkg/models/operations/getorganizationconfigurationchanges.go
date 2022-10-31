package operations

type GetOrganizationConfigurationChangesPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationConfigurationChangesQueryParams struct {
	AdminID       *string  `queryParam:"style=form,explode=true,name=adminId"`
	EndingBefore  *string  `queryParam:"style=form,explode=true,name=endingBefore"`
	NetworkID     *string  `queryParam:"style=form,explode=true,name=networkId"`
	PerPage       *int64   `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter *string  `queryParam:"style=form,explode=true,name=startingAfter"`
	T0            *string  `queryParam:"style=form,explode=true,name=t0"`
	T1            *string  `queryParam:"style=form,explode=true,name=t1"`
	Timespan      *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetOrganizationConfigurationChangesRequest struct {
	PathParams  GetOrganizationConfigurationChangesPathParams
	QueryParams GetOrganizationConfigurationChangesQueryParams
}

type GetOrganizationConfigurationChangesResponse struct {
	ContentType                                                 string
	Headers                                                     map[string][]string
	StatusCode                                                  int64
	GetOrganizationConfigurationChanges200ApplicationJSONObject map[string]interface{}
}
