import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuditLoggingSettings } from "./auditloggingsettings";
import { VpcSettings } from "./vpcsettings";


// CustomerSettings
/** 
 * Represents settings at a customer level.
**/
export class CustomerSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditLoggingSettings" })
  auditLoggingSettings?: AuditLoggingSettings;

  @Metadata({ data: "json, name=vpcSettings" })
  vpcSettings?: VpcSettings;
}
