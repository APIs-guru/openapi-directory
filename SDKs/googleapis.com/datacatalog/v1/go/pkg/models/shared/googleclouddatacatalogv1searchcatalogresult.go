package shared

type GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum string

const (
	GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnumIntegratedSystemUnspecified GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum = "INTEGRATED_SYSTEM_UNSPECIFIED"
	GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnumBigquery                    GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum = "BIGQUERY"
	GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnumCloudPubsub                 GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum = "CLOUD_PUBSUB"
	GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnumDataprocMetastore           GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum = "DATAPROC_METASTORE"
	GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnumDataplex                    GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum = "DATAPLEX"
)

type GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum string

const (
	GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnumSearchResultTypeUnspecified GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum = "SEARCH_RESULT_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnumEntry                       GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum = "ENTRY"
	GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnumTagTemplate                 GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum = "TAG_TEMPLATE"
	GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnumEntryGroup                  GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum = "ENTRY_GROUP"
)

type GoogleCloudDatacatalogV1SearchCatalogResult struct {
	Description          *string                                                          `json:"description"`
	DisplayName          *string                                                          `json:"displayName"`
	FullyQualifiedName   *string                                                          `json:"fullyQualifiedName"`
	IntegratedSystem     *GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum `json:"integratedSystem"`
	LinkedResource       *string                                                          `json:"linkedResource"`
	ModifyTime           *string                                                          `json:"modifyTime"`
	RelativeResourceName *string                                                          `json:"relativeResourceName"`
	SearchResultSubtype  *string                                                          `json:"searchResultSubtype"`
	SearchResultType     *GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum `json:"searchResultType"`
	UserSpecifiedSystem  *string                                                          `json:"userSpecifiedSystem"`
}
