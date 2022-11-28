import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for checking health of a service. Otoroshi will perform GET call on the URL to check if the service is still alive
**/
export declare class HealthCheck extends SpeakeasyBase {
    enabled: boolean;
    url?: string;
}
