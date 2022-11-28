import { SpeakeasyBase } from "../../../internal/utils";
import { AuditLoggingSettings } from "./auditloggingsettings";
import { VpcSettings } from "./vpcsettings";
/**
 * Represents settings at a customer level.
**/
export declare class CustomerSettings extends SpeakeasyBase {
    auditLoggingSettings?: AuditLoggingSettings;
    vpcSettings?: VpcSettings;
}
