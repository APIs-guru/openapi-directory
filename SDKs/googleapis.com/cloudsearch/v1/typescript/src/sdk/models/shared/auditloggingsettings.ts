import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuditLoggingSettings
/** 
 * Represents the settings for Cloud audit logging
**/
export class AuditLoggingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=logAdminReadActions" })
  logAdminReadActions?: boolean;

  @Metadata({ data: "json, name=logDataReadActions" })
  logDataReadActions?: boolean;

  @Metadata({ data: "json, name=logDataWriteActions" })
  logDataWriteActions?: boolean;

  @Metadata({ data: "json, name=project" })
  project?: string;
}
