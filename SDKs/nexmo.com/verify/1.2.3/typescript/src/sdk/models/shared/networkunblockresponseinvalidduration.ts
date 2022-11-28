import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NetworkUnblockResponseInvalidDurationInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}


// NetworkUnblockResponseInvalidDuration
/** 
 * Invalid Duration
**/
export class NetworkUnblockResponseInvalidDuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: NetworkUnblockResponseInvalidDurationInvalidParameters })
  invalidParameters?: NetworkUnblockResponseInvalidDurationInvalidParameters[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
