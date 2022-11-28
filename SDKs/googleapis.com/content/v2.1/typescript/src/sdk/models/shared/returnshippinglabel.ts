import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReturnShippingLabel
/** 
 * Return shipping label for a Buy on Google merchant-managed return.
**/
export class ReturnShippingLabel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=labelUri" })
  labelUri?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
