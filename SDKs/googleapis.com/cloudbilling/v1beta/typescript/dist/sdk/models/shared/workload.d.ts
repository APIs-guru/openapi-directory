import { SpeakeasyBase } from "../../../internal/utils";
import { CloudStorageWorkload } from "./cloudstorageworkload";
import { ComputeVmWorkload } from "./computevmworkload";
/**
 * Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.
**/
export declare class Workload extends SpeakeasyBase {
    cloudStorageWorkload?: CloudStorageWorkload;
    computeVmWorkload?: ComputeVmWorkload;
    name?: string;
}
