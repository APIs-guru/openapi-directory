import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum {
    SearchResultTypeUnspecified = "SEARCH_RESULT_TYPE_UNSPECIFIED"
,    Entry = "ENTRY"
,    TagTemplate = "TAG_TEMPLATE"
,    EntryGroup = "ENTRY_GROUP"
}


// GoogleCloudDatacatalogV1beta1SearchCatalogResult
/** 
 * A result that appears in the response of a search request. Each result captures details of one entry that matches the search.
**/
export class GoogleCloudDatacatalogV1beta1SearchCatalogResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkedResource" })
  linkedResource?: string;

  @Metadata({ data: "json, name=modifyTime" })
  modifyTime?: string;

  @Metadata({ data: "json, name=relativeResourceName" })
  relativeResourceName?: string;

  @Metadata({ data: "json, name=searchResultSubtype" })
  searchResultSubtype?: string;

  @Metadata({ data: "json, name=searchResultType" })
  searchResultType?: GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum;
}
