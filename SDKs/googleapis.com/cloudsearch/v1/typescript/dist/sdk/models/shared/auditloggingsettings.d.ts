import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the settings for Cloud audit logging
**/
export declare class AuditLoggingSettings extends SpeakeasyBase {
    logAdminReadActions?: boolean;
    logDataReadActions?: boolean;
    logDataWriteActions?: boolean;
    project?: string;
}
