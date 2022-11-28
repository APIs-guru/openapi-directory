import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB",
    DataprocMetastore = "DATAPROC_METASTORE",
    Dataplex = "DATAPLEX"
}
export declare enum GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum {
    SearchResultTypeUnspecified = "SEARCH_RESULT_TYPE_UNSPECIFIED",
    Entry = "ENTRY",
    TagTemplate = "TAG_TEMPLATE",
    EntryGroup = "ENTRY_GROUP"
}
/**
 * Result in the response to a search request. Each result captures details of one entry that matches the search.
**/
export declare class GoogleCloudDatacatalogV1SearchCatalogResult extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    fullyQualifiedName?: string;
    integratedSystem?: GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum;
    linkedResource?: string;
    modifyTime?: string;
    relativeResourceName?: string;
    searchResultSubtype?: string;
    searchResultType?: GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum;
    userSpecifiedSystem?: string;
}
