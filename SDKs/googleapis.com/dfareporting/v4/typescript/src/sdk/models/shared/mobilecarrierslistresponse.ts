import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MobileCarrier } from "./mobilecarrier";


// MobileCarriersListResponse
/** 
 * Mobile Carrier List Response
**/
export class MobileCarriersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mobileCarriers", elemType: shared.MobileCarrier })
  mobileCarriers?: MobileCarrier[];
}
