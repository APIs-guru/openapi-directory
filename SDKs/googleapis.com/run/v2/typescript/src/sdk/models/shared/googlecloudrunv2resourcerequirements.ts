import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2ResourceRequirements
/** 
 * ResourceRequirements describes the compute resource requirements.
**/
export class GoogleCloudRunV2ResourceRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuIdle" })
  cpuIdle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=limits" })
  limits?: Map<string, string>;
}
