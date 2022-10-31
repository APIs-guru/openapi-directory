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
	Description          *string                                                          `json:"description,omitempty"`
	DisplayName          *string                                                          `json:"displayName,omitempty"`
	FullyQualifiedName   *string                                                          `json:"fullyQualifiedName,omitempty"`
	IntegratedSystem     *GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum `json:"integratedSystem,omitempty"`
	LinkedResource       *string                                                          `json:"linkedResource,omitempty"`
	ModifyTime           *string                                                          `json:"modifyTime,omitempty"`
	RelativeResourceName *string                                                          `json:"relativeResourceName,omitempty"`
	SearchResultSubtype  *string                                                          `json:"searchResultSubtype,omitempty"`
	SearchResultType     *GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum `json:"searchResultType,omitempty"`
	UserSpecifiedSystem  *string                                                          `json:"userSpecifiedSystem,omitempty"`
}
