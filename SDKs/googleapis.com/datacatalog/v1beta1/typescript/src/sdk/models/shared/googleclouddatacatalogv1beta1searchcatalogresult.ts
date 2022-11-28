import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum {
    SearchResultTypeUnspecified = "SEARCH_RESULT_TYPE_UNSPECIFIED",
    Entry = "ENTRY",
    TagTemplate = "TAG_TEMPLATE",
    EntryGroup = "ENTRY_GROUP"
}


// GoogleCloudDatacatalogV1beta1SearchCatalogResult
/** 
 * A result that appears in the response of a search request. Each result captures details of one entry that matches the search.
**/
export class GoogleCloudDatacatalogV1beta1SearchCatalogResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=modifyTime" })
  modifyTime?: string;

  @SpeakeasyMetadata({ data: "json, name=relativeResourceName" })
  relativeResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=searchResultSubtype" })
  searchResultSubtype?: string;

  @SpeakeasyMetadata({ data: "json, name=searchResultType" })
  searchResultType?: GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum;
}
