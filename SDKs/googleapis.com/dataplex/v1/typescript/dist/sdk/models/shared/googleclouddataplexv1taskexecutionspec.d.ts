import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Execution related settings, like retry and service_account.
**/
export declare class GoogleCloudDataplexV1TaskExecutionSpec extends SpeakeasyBase {
    args?: Map<string, string>;
    kmsKey?: string;
    maxJobExecutionLifetime?: string;
    project?: string;
    serviceAccount?: string;
}
