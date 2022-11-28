import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MavenArtifact } from "./mavenartifact";
import { ArtifactObjects } from "./artifactobjects";
import { PythonPackage } from "./pythonpackage";



// Artifacts
/** 
 * Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
**/
export class Artifacts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images" })
  images?: string[];

  @SpeakeasyMetadata({ data: "json, name=mavenArtifacts", elemType: MavenArtifact })
  mavenArtifacts?: MavenArtifact[];

  @SpeakeasyMetadata({ data: "json, name=objects" })
  objects?: ArtifactObjects;

  @SpeakeasyMetadata({ data: "json, name=pythonPackages", elemType: PythonPackage })
  pythonPackages?: PythonPackage[];
}
