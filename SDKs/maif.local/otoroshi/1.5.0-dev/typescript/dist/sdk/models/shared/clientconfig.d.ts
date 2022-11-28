import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration of the circuit breaker for a service descriptor
**/
export declare class ClientConfig extends SpeakeasyBase {
    backoffFactor: number;
    callTimeout: number;
    globalTimeout: number;
    maxErrors: number;
    retries: number;
    retryInitialDelay: number;
    sampleInterval: number;
    useCircuitBreaker: boolean;
}
