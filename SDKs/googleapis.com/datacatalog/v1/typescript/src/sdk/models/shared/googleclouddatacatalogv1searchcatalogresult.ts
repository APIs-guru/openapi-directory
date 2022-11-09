import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED"
,    Bigquery = "BIGQUERY"
,    CloudPubsub = "CLOUD_PUBSUB"
,    DataprocMetastore = "DATAPROC_METASTORE"
,    Dataplex = "DATAPLEX"
}

export enum GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum {
    SearchResultTypeUnspecified = "SEARCH_RESULT_TYPE_UNSPECIFIED"
,    Entry = "ENTRY"
,    TagTemplate = "TAG_TEMPLATE"
,    EntryGroup = "ENTRY_GROUP"
}


// GoogleCloudDatacatalogV1SearchCatalogResult
/** 
 * Result in the response to a search request. Each result captures details of one entry that matches the search.
**/
export class GoogleCloudDatacatalogV1SearchCatalogResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fullyQualifiedName" })
  fullyQualifiedName?: string;

  @Metadata({ data: "json, name=integratedSystem" })
  integratedSystem?: GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum;

  @Metadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @Metadata({ data: "json, name=modifyTime" })
  modifyTime?: string;

  @Metadata({ data: "json, name=relativeResourceName" })
  relativeResourceName?: string;

  @Metadata({ data: "json, name=searchResultSubtype" })
  searchResultSubtype?: string;

  @Metadata({ data: "json, name=searchResultType" })
  searchResultType?: GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum;

  @Metadata({ data: "json, name=userSpecifiedSystem" })
  userSpecifiedSystem?: string;
}
