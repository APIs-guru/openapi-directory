import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoBuganizerNotification } from "./enterprisecrmeventbusprotobuganizernotification";
import { EnterpriseCrmEventbusProtoAddress } from "./enterprisecrmeventbusprotoaddress";
import { EnterpriseCrmEventbusProtoCustomSuspensionRequest } from "./enterprisecrmeventbusprotocustomsuspensionrequest";
export declare class EnterpriseCrmEventbusProtoNotification extends SpeakeasyBase {
    buganizerNotification?: EnterpriseCrmEventbusProtoBuganizerNotification;
    emailAddress?: EnterpriseCrmEventbusProtoAddress;
    escalatorQueue?: string;
    pubsubTopic?: string;
    request?: EnterpriseCrmEventbusProtoCustomSuspensionRequest;
}
