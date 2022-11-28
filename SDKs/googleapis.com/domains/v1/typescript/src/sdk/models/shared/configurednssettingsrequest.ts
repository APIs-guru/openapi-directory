import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsSettingsInput } from "./dnssettings";



// ConfigureDnsSettingsRequestInput
/** 
 * Request for the `ConfigureDnsSettings` method.
**/
export class ConfigureDnsSettingsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsSettings" })
  dnsSettings?: DnsSettingsInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
