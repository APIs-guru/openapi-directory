import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PodSecurityPolicyConfig
/** 
 * Configuration for the PodSecurityPolicy feature.
**/
export class PodSecurityPolicyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
