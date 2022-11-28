import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuditLoggingSettings
/** 
 * Represents the settings for Cloud audit logging
**/
export class AuditLoggingSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logAdminReadActions" })
  logAdminReadActions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logDataReadActions" })
  logDataReadActions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logDataWriteActions" })
  logDataWriteActions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
