import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReturnShippingLabel
/** 
 * Return shipping label for a Buy on Google merchant-managed return.
**/
export class ReturnShippingLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=labelUri" })
  labelUri?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
