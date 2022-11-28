import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClientConfig
/** 
 * The configuration of the circuit breaker for a service descriptor
**/
export class ClientConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backoffFactor" })
  backoffFactor: number;

  @SpeakeasyMetadata({ data: "json, name=callTimeout" })
  callTimeout: number;

  @SpeakeasyMetadata({ data: "json, name=globalTimeout" })
  globalTimeout: number;

  @SpeakeasyMetadata({ data: "json, name=maxErrors" })
  maxErrors: number;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries: number;

  @SpeakeasyMetadata({ data: "json, name=retryInitialDelay" })
  retryInitialDelay: number;

  @SpeakeasyMetadata({ data: "json, name=sampleInterval" })
  sampleInterval: number;

  @SpeakeasyMetadata({ data: "json, name=useCircuitBreaker" })
  useCircuitBreaker: boolean;
}
