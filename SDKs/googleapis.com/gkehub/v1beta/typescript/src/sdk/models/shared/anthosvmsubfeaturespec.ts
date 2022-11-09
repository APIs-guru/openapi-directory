import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnthosVmSubFeatureSpec
/** 
 * AnthosVMSubFeatureSpec contains the subfeature configuration for a membership/cluster.
**/
export class AnthosVmSubFeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=migrateSpec" })
  migrateSpec?: Map<string, any>;

  @Metadata({ data: "json, name=serviceMeshSpec" })
  serviceMeshSpec?: Map<string, any>;
}
