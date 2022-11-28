import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoNotification } from "./enterprisecrmeventbusprotonotification";
import { EnterpriseCrmEventbusProtoSuspensionExpiration } from "./enterprisecrmeventbusprotosuspensionexpiration";
import { EnterpriseCrmEventbusProtoSuspensionAuthPermissions } from "./enterprisecrmeventbusprotosuspensionauthpermissions";
export declare class EnterpriseCrmEventbusProtoSuspensionConfig extends SpeakeasyBase {
    customMessage?: string;
    notifications?: EnterpriseCrmEventbusProtoNotification[];
    suspensionExpiration?: EnterpriseCrmEventbusProtoSuspensionExpiration;
    whoMayResolve?: EnterpriseCrmEventbusProtoSuspensionAuthPermissions[];
}
