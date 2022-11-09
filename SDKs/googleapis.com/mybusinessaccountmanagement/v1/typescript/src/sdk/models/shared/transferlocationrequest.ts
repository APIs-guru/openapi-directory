import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransferLocationRequest
/** 
 * Request message for AccessControl.TransferLocation.
**/
export class TransferLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationAccount" })
  destinationAccount?: string;
}
