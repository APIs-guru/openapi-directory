import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NetworkUnblockResponseUnprocessableNetworkInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


// NetworkUnblockResponseUnprocessableNetwork
/** 
 * Invalid Network
**/
export class NetworkUnblockResponseUnprocessableNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: NetworkUnblockResponseUnprocessableNetworkInvalidParameters })
  invalidParameters?: NetworkUnblockResponseUnprocessableNetworkInvalidParameters[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
