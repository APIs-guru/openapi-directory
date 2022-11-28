import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileCarrier } from "./mobilecarrier";



// MobileCarriersListResponse
/** 
 * Mobile Carrier List Response
**/
export class MobileCarriersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileCarriers", elemType: MobileCarrier })
  mobileCarriers?: MobileCarrier[];
}
