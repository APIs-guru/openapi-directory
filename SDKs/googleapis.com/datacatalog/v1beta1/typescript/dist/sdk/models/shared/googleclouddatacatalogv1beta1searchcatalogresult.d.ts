import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum {
    SearchResultTypeUnspecified = "SEARCH_RESULT_TYPE_UNSPECIFIED",
    Entry = "ENTRY",
    TagTemplate = "TAG_TEMPLATE",
    EntryGroup = "ENTRY_GROUP"
}
/**
 * A result that appears in the response of a search request. Each result captures details of one entry that matches the search.
**/
export declare class GoogleCloudDatacatalogV1beta1SearchCatalogResult extends SpeakeasyBase {
    linkedResource?: string;
    modifyTime?: string;
    relativeResourceName?: string;
    searchResultSubtype?: string;
    searchResultType?: GoogleCloudDatacatalogV1beta1SearchCatalogResultSearchResultTypeEnum;
}
