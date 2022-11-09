import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoNotification } from "./enterprisecrmeventbusprotonotification";
import { EnterpriseCrmEventbusProtoSuspensionExpiration } from "./enterprisecrmeventbusprotosuspensionexpiration";
import { EnterpriseCrmEventbusProtoSuspensionAuthPermissions } from "./enterprisecrmeventbusprotosuspensionauthpermissions";


export class EnterpriseCrmEventbusProtoSuspensionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=customMessage" })
  customMessage?: string;

  @Metadata({ data: "json, name=notifications", elemType: shared.EnterpriseCrmEventbusProtoNotification })
  notifications?: EnterpriseCrmEventbusProtoNotification[];

  @Metadata({ data: "json, name=suspensionExpiration" })
  suspensionExpiration?: EnterpriseCrmEventbusProtoSuspensionExpiration;

  @Metadata({ data: "json, name=whoMayResolve", elemType: shared.EnterpriseCrmEventbusProtoSuspensionAuthPermissions })
  whoMayResolve?: EnterpriseCrmEventbusProtoSuspensionAuthPermissions[];
}
