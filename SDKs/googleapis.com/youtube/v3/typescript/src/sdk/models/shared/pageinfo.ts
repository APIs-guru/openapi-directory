import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PageInfo
/** 
 * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
**/
export class PageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resultsPerPage" })
  resultsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
