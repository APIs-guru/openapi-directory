import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransferLocationRequest
/** 
 * Request message for AccessControl.TransferLocation.
**/
export class TransferLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationAccount" })
  destinationAccount?: string;
}
