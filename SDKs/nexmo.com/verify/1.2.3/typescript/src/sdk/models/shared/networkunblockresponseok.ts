import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkUnblockResponseOk
/** 
 * Success
**/
export class NetworkUnblockResponseOk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=unblocked_until" })
  unblockedUntil?: string;
}
