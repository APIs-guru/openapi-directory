import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity } from "./enterprisecrmeventbusprotosuspensionauthpermissionsgaiaidentity";
import { EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity } from "./enterprisecrmeventbusprotosuspensionauthpermissionsgaiaidentity";


// EnterpriseCrmEventbusProtoSuspensionAuthPermissions
/** 
 * LINT.IfChange
**/
export class EnterpriseCrmEventbusProtoSuspensionAuthPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=gaiaIdentity" })
  gaiaIdentity?: EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;

  @Metadata({ data: "json, name=googleGroup" })
  googleGroup?: EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;

  @Metadata({ data: "json, name=loasRole" })
  loasRole?: string;

  @Metadata({ data: "json, name=mdbGroup" })
  mdbGroup?: string;
}
