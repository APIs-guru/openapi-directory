import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudStorageWorkload } from "./cloudstorageworkload";
import { ComputeVmWorkload } from "./computevmworkload";



// Workload
/** 
 * Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.
**/
export class Workload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudStorageWorkload" })
  cloudStorageWorkload?: CloudStorageWorkload;

  @SpeakeasyMetadata({ data: "json, name=computeVmWorkload" })
  computeVmWorkload?: ComputeVmWorkload;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
