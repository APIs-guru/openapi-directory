import { SpeakeasyBase } from "../../../internal/utils";
import { DnsSettingsInput } from "./dnssettings";
/**
 * Request for the `ConfigureDnsSettings` method.
**/
export declare class ConfigureDnsSettingsRequestInput extends SpeakeasyBase {
    dnsSettings?: DnsSettingsInput;
    updateMask?: string;
    validateOnly?: boolean;
}
