import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Dv3Ids
/** 
 * DV360 IDs related to the custom event.
**/
export class Dv3Ids extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dvCampaignId" })
  dvCampaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=dvCreativeId" })
  dvCreativeId?: string;

  @SpeakeasyMetadata({ data: "json, name=dvInsertionOrderId" })
  dvInsertionOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=dvLineItemId" })
  dvLineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=dvSiteId" })
  dvSiteId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
