import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetArtifact
/** 
 * The artifacts produced by a target render operation.
**/
export class TargetArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactUri" })
  artifactUri?: string;

  @SpeakeasyMetadata({ data: "json, name=manifestPath" })
  manifestPath?: string;

  @SpeakeasyMetadata({ data: "json, name=skaffoldConfigPath" })
  skaffoldConfigPath?: string;
}
