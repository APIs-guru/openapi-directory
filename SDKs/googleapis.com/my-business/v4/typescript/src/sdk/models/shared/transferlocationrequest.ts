import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransferLocationRequest
/** 
 * Request message for Locations.TransferLocation.
**/
export class TransferLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=toAccount" })
  toAccount?: string;
}
