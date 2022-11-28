import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB",
    DataprocMetastore = "DATAPROC_METASTORE",
    Dataplex = "DATAPLEX"
}

export enum GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum {
    SearchResultTypeUnspecified = "SEARCH_RESULT_TYPE_UNSPECIFIED",
    Entry = "ENTRY",
    TagTemplate = "TAG_TEMPLATE",
    EntryGroup = "ENTRY_GROUP"
}


// GoogleCloudDatacatalogV1SearchCatalogResult
/** 
 * Result in the response to a search request. Each result captures details of one entry that matches the search.
**/
export class GoogleCloudDatacatalogV1SearchCatalogResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" })
  fullyQualifiedName?: string;

  @SpeakeasyMetadata({ data: "json, name=integratedSystem" })
  integratedSystem?: GoogleCloudDatacatalogV1SearchCatalogResultIntegratedSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=modifyTime" })
  modifyTime?: string;

  @SpeakeasyMetadata({ data: "json, name=relativeResourceName" })
  relativeResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=searchResultSubtype" })
  searchResultSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=searchResultType" })
  searchResultType?: GoogleCloudDatacatalogV1SearchCatalogResultSearchResultTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userSpecifiedSystem" })
  userSpecifiedSystem?: string;
}
