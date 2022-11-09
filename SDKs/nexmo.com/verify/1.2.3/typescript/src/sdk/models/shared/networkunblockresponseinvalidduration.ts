import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NetworkUnblockResponseInvalidDurationInvalidParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}


// NetworkUnblockResponseInvalidDuration
/** 
 * Invalid Duration
**/
export class NetworkUnblockResponseInvalidDuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=invalid_parameters", elemType: shared.NetworkUnblockResponseInvalidDurationInvalidParameters })
  invalidParameters?: NetworkUnblockResponseInvalidDurationInvalidParameters[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
