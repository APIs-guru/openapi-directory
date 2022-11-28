import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoNotification } from "./enterprisecrmeventbusprotonotification";
import { EnterpriseCrmEventbusProtoSuspensionExpiration } from "./enterprisecrmeventbusprotosuspensionexpiration";
import { EnterpriseCrmEventbusProtoSuspensionAuthPermissions } from "./enterprisecrmeventbusprotosuspensionauthpermissions";



export class EnterpriseCrmEventbusProtoSuspensionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customMessage" })
  customMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: EnterpriseCrmEventbusProtoNotification })
  notifications?: EnterpriseCrmEventbusProtoNotification[];

  @SpeakeasyMetadata({ data: "json, name=suspensionExpiration" })
  suspensionExpiration?: EnterpriseCrmEventbusProtoSuspensionExpiration;

  @SpeakeasyMetadata({ data: "json, name=whoMayResolve", elemType: EnterpriseCrmEventbusProtoSuspensionAuthPermissions })
  whoMayResolve?: EnterpriseCrmEventbusProtoSuspensionAuthPermissions[];
}
