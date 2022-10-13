package operations

type GetOrganizationDevicesPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationDevicesQueryParams struct {
	ConfigurationUpdatedAfter *string `queryParam:"style=form,explode=true,name=configurationUpdatedAfter"`
	EndingBefore              *string `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage                   *int64  `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter             *string `queryParam:"style=form,explode=true,name=startingAfter"`
}

type GetOrganizationDevicesRequest struct {
	PathParams  GetOrganizationDevicesPathParams
	QueryParams GetOrganizationDevicesQueryParams
}

type GetOrganizationDevicesResponse struct {
	ContentType                                    string
	Headers                                        map[string][]string
	StatusCode                                     int64
	GetOrganizationDevices200ApplicationJSONObject map[string]interface{}
}
