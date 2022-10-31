package operations

type GetOrganizationNetworksPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationNetworksTagsFilterTypeEnum string

const (
	GetOrganizationNetworksTagsFilterTypeEnumWithAnyTags GetOrganizationNetworksTagsFilterTypeEnum = "withAnyTags"
	GetOrganizationNetworksTagsFilterTypeEnumWithAllTags GetOrganizationNetworksTagsFilterTypeEnum = "withAllTags"
)

type GetOrganizationNetworksQueryParams struct {
	ConfigTemplateID *string                                    `queryParam:"style=form,explode=true,name=configTemplateId"`
	EndingBefore     *string                                    `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage          *int64                                     `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter    *string                                    `queryParam:"style=form,explode=true,name=startingAfter"`
	Tags             []string                                   `queryParam:"style=form,explode=false,name=tags"`
	TagsFilterType   *GetOrganizationNetworksTagsFilterTypeEnum `queryParam:"style=form,explode=true,name=tagsFilterType"`
}

type GetOrganizationNetworksRequest struct {
	PathParams  GetOrganizationNetworksPathParams
	QueryParams GetOrganizationNetworksQueryParams
}

type GetOrganizationNetworksResponse struct {
	ContentType                                     string
	Headers                                         map[string][]string
	StatusCode                                      int64
	GetOrganizationNetworks200ApplicationJSONObject map[string]interface{}
}
