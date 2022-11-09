import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceRequirements
/** 
 * ResourceRequirements describes the compute resource requirements.
**/
export class ResourceRequirements extends SpeakeasyBase {
  @Metadata({ data: "json, name=limits" })
  limits?: Map<string, string>;

  @Metadata({ data: "json, name=requests" })
  requests?: Map<string, string>;
}
