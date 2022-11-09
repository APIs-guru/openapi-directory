import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceExternalIPsConfig
/** 
 * Config to block services with externalIPs field.
**/
export class ServiceExternalIPsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
