import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdFilter
/** 
 * A filtering option that filters entities by their entity IDs.
**/
export class IdFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adGroupAdIds" })
  adGroupAdIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=adGroupIds" })
  adGroupIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=campaignIds" })
  campaignIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=insertionOrderIds" })
  insertionOrderIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=lineItemIds" })
  lineItemIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=mediaProductIds" })
  mediaProductIds?: string[];
}
