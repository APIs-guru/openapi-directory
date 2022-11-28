package shared

type GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum string

const (
	GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnumSearchResultTypeUnspecified GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum = "SEARCH_RESULT_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnumEntry                       GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum = "ENTRY"
	GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnumTagTemplate                 GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum = "TAG_TEMPLATE"
	GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnumEntryGroup                  GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum = "ENTRY_GROUP"
)

// GoogleCloudDatacatalogV1beta1SearchCatalogResult
// A result that appears in the response of a search request. Each result captures details of one entry that matches the search.
type GoogleCloudDatacatalogV1beta1SearchCatalogResult struct {
	LinkedResource       *string                                                               `json:"linkedResource,omitempty"`
	ModifyTime           *string                                                               `json:"modifyTime,omitempty"`
	RelativeResourceName *string                                                               `json:"relativeResourceName,omitempty"`
	SearchResultSubtype  *string                                                               `json:"searchResultSubtype,omitempty"`
	SearchResultType     *GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum `json:"searchResultType,omitempty"`
}
