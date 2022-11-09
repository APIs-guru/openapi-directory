import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransferLocationRequest
/** 
 * Request message for Locations.TransferLocation.
**/
export class TransferLocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=toAccount" })
  toAccount?: string;
}
