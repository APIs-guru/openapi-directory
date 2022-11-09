import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DnsSettings } from "./dnssettings";


// ConfigureDnsSettingsRequest
/** 
 * Request for the `ConfigureDnsSettings` method.
**/
export class ConfigureDnsSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsSettings" })
  dnsSettings?: DnsSettings;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
