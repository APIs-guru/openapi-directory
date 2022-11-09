import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2ResourceRequirements
/** 
 * ResourceRequirements describes the compute resource requirements.
**/
export class GoogleCloudRunV2ResourceRequirements extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuIdle" })
  cpuIdle?: boolean;

  @Metadata({ data: "json, name=limits" })
  limits?: Map<string, string>;
}
