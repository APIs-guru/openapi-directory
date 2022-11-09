import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MavenArtifact } from "./mavenartifact";
import { ArtifactObjects } from "./artifactobjects";
import { PythonPackage } from "./pythonpackage";


// Artifacts
/** 
 * Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
**/
export class Artifacts extends SpeakeasyBase {
  @Metadata({ data: "json, name=images" })
  images?: string[];

  @Metadata({ data: "json, name=mavenArtifacts", elemType: shared.MavenArtifact })
  mavenArtifacts?: MavenArtifact[];

  @Metadata({ data: "json, name=objects" })
  objects?: ArtifactObjects;

  @Metadata({ data: "json, name=pythonPackages", elemType: shared.PythonPackage })
  pythonPackages?: PythonPackage[];
}
