import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoBuganizerNotification } from "./enterprisecrmeventbusprotobuganizernotification";
import { EnterpriseCrmEventbusProtoAddress } from "./enterprisecrmeventbusprotoaddress";
import { EnterpriseCrmEventbusProtoCustomSuspensionRequest } from "./enterprisecrmeventbusprotocustomsuspensionrequest";


export class EnterpriseCrmEventbusProtoNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=buganizerNotification" })
  buganizerNotification?: EnterpriseCrmEventbusProtoBuganizerNotification;

  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: EnterpriseCrmEventbusProtoAddress;

  @Metadata({ data: "json, name=escalatorQueue" })
  escalatorQueue?: string;

  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @Metadata({ data: "json, name=request" })
  request?: EnterpriseCrmEventbusProtoCustomSuspensionRequest;
}
