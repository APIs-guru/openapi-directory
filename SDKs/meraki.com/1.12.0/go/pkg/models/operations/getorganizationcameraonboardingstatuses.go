package operations

type GetOrganizationCameraOnboardingStatusesPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationCameraOnboardingStatusesQueryParams struct {
	NetworkIds []string `queryParam:"style=form,explode=false,name=networkIds"`
	Serials    []string `queryParam:"style=form,explode=false,name=serials"`
}

type GetOrganizationCameraOnboardingStatusesRequest struct {
	PathParams  GetOrganizationCameraOnboardingStatusesPathParams
	QueryParams GetOrganizationCameraOnboardingStatusesQueryParams
}

type GetOrganizationCameraOnboardingStatusesResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	GetOrganizationCameraOnboardingStatuses200ApplicationJSONObject map[string]interface{}
}
