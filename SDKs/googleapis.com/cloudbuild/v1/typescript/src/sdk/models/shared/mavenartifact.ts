import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MavenArtifact
/** 
 * A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
**/
export class MavenArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
