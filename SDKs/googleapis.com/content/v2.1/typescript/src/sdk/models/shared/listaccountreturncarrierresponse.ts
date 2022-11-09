import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountReturnCarrier } from "./accountreturncarrier";


// ListAccountReturnCarrierResponse
/** 
 * Response for listing account return carriers.
**/
export class ListAccountReturnCarrierResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountReturnCarriers", elemType: shared.AccountReturnCarrier })
  accountReturnCarriers?: AccountReturnCarrier[];
}
