import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TargetArtifact
/** 
 * The artifacts produced by a target render operation.
**/
export class TargetArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactUri" })
  artifactUri?: string;

  @Metadata({ data: "json, name=manifestPath" })
  manifestPath?: string;

  @Metadata({ data: "json, name=skaffoldConfigPath" })
  skaffoldConfigPath?: string;
}
