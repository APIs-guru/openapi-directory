import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NetworkUnblockResponseOk
/** 
 * Success
**/
export class NetworkUnblockResponseOk extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=unblocked_until" })
  unblockedUntil?: string;
}
