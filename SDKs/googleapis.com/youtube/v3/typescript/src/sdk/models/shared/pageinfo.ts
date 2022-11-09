import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PageInfo
/** 
 * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
**/
export class PageInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=resultsPerPage" })
  resultsPerPage?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
