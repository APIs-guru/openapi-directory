package shared

type GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum string

const (
	GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnumSearchResultTypeUnspecified GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum = "SEARCH_RESULT_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnumEntry                       GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum = "ENTRY"
	GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnumTagTemplate                 GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum = "TAG_TEMPLATE"
	GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnumEntryGroup                  GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum = "ENTRY_GROUP"
)

type GoogleCloudDatacatalogV1beta1SearchCatalogResult struct {
	LinkedResource       *string                                                               `json:"linkedResource"`
	ModifyTime           *string                                                               `json:"modifyTime"`
	RelativeResourceName *string                                                               `json:"relativeResourceName"`
	SearchResultSubtype  *string                                                               `json:"searchResultSubtype"`
	SearchResultType     *GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum `json:"searchResultType"`
}
