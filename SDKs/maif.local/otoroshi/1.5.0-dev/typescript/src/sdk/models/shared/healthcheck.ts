import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HealthCheck
/** 
 * The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive
**/
export class HealthCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
