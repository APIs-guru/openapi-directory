import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoBuganizerNotification } from "./enterprisecrmeventbusprotobuganizernotification";
import { EnterpriseCrmEventbusProtoAddress } from "./enterprisecrmeventbusprotoaddress";
import { EnterpriseCrmEventbusProtoCustomSuspensionRequest } from "./enterprisecrmeventbusprotocustomsuspensionrequest";



export class EnterpriseCrmEventbusProtoNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buganizerNotification" })
  buganizerNotification?: EnterpriseCrmEventbusProtoBuganizerNotification;

  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: EnterpriseCrmEventbusProtoAddress;

  @SpeakeasyMetadata({ data: "json, name=escalatorQueue" })
  escalatorQueue?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: EnterpriseCrmEventbusProtoCustomSuspensionRequest;
}
