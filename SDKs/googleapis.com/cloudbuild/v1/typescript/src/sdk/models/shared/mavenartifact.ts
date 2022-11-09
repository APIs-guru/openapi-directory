import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MavenArtifact
/** 
 * A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
**/
export class MavenArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @Metadata({ data: "json, name=groupId" })
  groupId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
