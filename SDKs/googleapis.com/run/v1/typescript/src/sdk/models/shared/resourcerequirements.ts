import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceRequirements
/** 
 * ResourceRequirements describes the compute resource requirements.
**/
export class ResourceRequirements extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limits" })
  limits?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=requests" })
  requests?: Map<string, string>;
}
