import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Execution using a private Cloud Build pool.
**/
export declare class PrivatePool extends SpeakeasyBase {
    artifactStorage?: string;
    serviceAccount?: string;
    workerPool?: string;
}
