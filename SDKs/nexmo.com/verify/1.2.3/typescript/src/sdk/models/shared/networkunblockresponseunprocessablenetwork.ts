import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NetworkUnblockResponseUnprocessableNetworkInvalidParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


// NetworkUnblockResponseUnprocessableNetwork
/** 
 * Invalid Network
**/
export class NetworkUnblockResponseUnprocessableNetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=invalid_parameters", elemType: shared.NetworkUnblockResponseUnprocessableNetworkInvalidParameters })
  invalidParameters?: NetworkUnblockResponseUnprocessableNetworkInvalidParameters[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
