import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceExternalIPsConfig
/** 
 * Config to block services with externalIPs field.
**/
export class ServiceExternalIPsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
