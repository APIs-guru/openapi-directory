import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountReturnCarrier } from "./accountreturncarrier";



// ListAccountReturnCarrierResponse
/** 
 * Response for listing account return carriers.
**/
export class ListAccountReturnCarrierResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountReturnCarriers", elemType: AccountReturnCarrier })
  accountReturnCarriers?: AccountReturnCarrier[];
}
