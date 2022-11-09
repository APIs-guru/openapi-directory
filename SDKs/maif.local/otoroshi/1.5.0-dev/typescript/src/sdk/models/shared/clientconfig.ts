import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClientConfig
/** 
 * The configuration of the circuit breaker for a service descriptor
**/
export class ClientConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=backoffFactor" })
  backoffFactor: number;

  @Metadata({ data: "json, name=callTimeout" })
  callTimeout: number;

  @Metadata({ data: "json, name=globalTimeout" })
  globalTimeout: number;

  @Metadata({ data: "json, name=maxErrors" })
  maxErrors: number;

  @Metadata({ data: "json, name=retries" })
  retries: number;

  @Metadata({ data: "json, name=retryInitialDelay" })
  retryInitialDelay: number;

  @Metadata({ data: "json, name=sampleInterval" })
  sampleInterval: number;

  @Metadata({ data: "json, name=useCircuitBreaker" })
  useCircuitBreaker: boolean;
}
