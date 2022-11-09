import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudStorageWorkload } from "./cloudstorageworkload";
import { ComputeVmWorkload } from "./computevmworkload";


// Workload
/** 
 * Specifies usage on a single Google Cloud product over a time frame. Each Google Cloud product has its own message, containing specific product configuration parameters of the product usage amounts along each dimension in which the product is billed.
**/
export class Workload extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudStorageWorkload" })
  cloudStorageWorkload?: CloudStorageWorkload;

  @Metadata({ data: "json, name=computeVmWorkload" })
  computeVmWorkload?: ComputeVmWorkload;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
