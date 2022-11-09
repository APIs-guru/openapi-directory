import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HealthCheck
/** 
 * The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive
**/
export class HealthCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
