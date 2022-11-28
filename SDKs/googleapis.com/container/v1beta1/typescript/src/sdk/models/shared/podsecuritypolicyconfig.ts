import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PodSecurityPolicyConfig
/** 
 * Configuration for the PodSecurityPolicy feature.
**/
export class PodSecurityPolicyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
