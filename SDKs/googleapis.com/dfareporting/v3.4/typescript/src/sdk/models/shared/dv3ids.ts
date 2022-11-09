import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Dv3Ids
/** 
 * DV360 IDs related to the custom event.
**/
export class Dv3Ids extends SpeakeasyBase {
  @Metadata({ data: "json, name=dvCampaignId" })
  dvCampaignId?: string;

  @Metadata({ data: "json, name=dvCreativeId" })
  dvCreativeId?: string;

  @Metadata({ data: "json, name=dvInsertionOrderId" })
  dvInsertionOrderId?: string;

  @Metadata({ data: "json, name=dvLineItemId" })
  dvLineItemId?: string;

  @Metadata({ data: "json, name=dvSiteId" })
  dvSiteId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
