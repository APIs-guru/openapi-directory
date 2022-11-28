import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuditLoggingSettings } from "./auditloggingsettings";
import { VpcSettings } from "./vpcsettings";



// CustomerSettings
/** 
 * Represents settings at a customer level.
**/
export class CustomerSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auditLoggingSettings" })
  auditLoggingSettings?: AuditLoggingSettings;

  @SpeakeasyMetadata({ data: "json, name=vpcSettings" })
  vpcSettings?: VpcSettings;
}
