import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdFilter
/** 
 * A filtering option that filters entities by their entity IDs.
**/
export class IdFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=adGroupAdIds" })
  adGroupAdIds?: string[];

  @Metadata({ data: "json, name=adGroupIds" })
  adGroupIds?: string[];

  @Metadata({ data: "json, name=campaignIds" })
  campaignIds?: string[];

  @Metadata({ data: "json, name=insertionOrderIds" })
  insertionOrderIds?: string[];

  @Metadata({ data: "json, name=lineItemIds" })
  lineItemIds?: string[];

  @Metadata({ data: "json, name=mediaProductIds" })
  mediaProductIds?: string[];
}
