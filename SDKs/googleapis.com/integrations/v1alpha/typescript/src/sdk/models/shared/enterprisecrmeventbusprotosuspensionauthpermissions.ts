import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity } from "./enterprisecrmeventbusprotosuspensionauthpermissionsgaiaidentity";



// EnterpriseCrmEventbusProtoSuspensionAuthPermissions
/** 
 * LINT.IfChange
**/
export class EnterpriseCrmEventbusProtoSuspensionAuthPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gaiaIdentity" })
  gaiaIdentity?: EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;

  @SpeakeasyMetadata({ data: "json, name=googleGroup" })
  googleGroup?: EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;

  @SpeakeasyMetadata({ data: "json, name=loasRole" })
  loasRole?: string;

  @SpeakeasyMetadata({ data: "json, name=mdbGroup" })
  mdbGroup?: string;
}
