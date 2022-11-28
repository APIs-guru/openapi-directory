import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeSpan } from "./timespan";
import { BuiltImage } from "./builtimage";
import { UploadedMavenArtifact } from "./uploadedmavenartifact";
import { UploadedPythonPackage } from "./uploadedpythonpackage";



// Results
/** 
 * Artifacts created by the build pipeline.
**/
export class Results extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactManifest" })
  artifactManifest?: string;

  @SpeakeasyMetadata({ data: "json, name=artifactTiming" })
  artifactTiming?: TimeSpan;

  @SpeakeasyMetadata({ data: "json, name=buildStepImages" })
  buildStepImages?: string[];

  @SpeakeasyMetadata({ data: "json, name=buildStepOutputs" })
  buildStepOutputs?: string[];

  @SpeakeasyMetadata({ data: "json, name=images", elemType: BuiltImage })
  images?: BuiltImage[];

  @SpeakeasyMetadata({ data: "json, name=mavenArtifacts", elemType: UploadedMavenArtifact })
  mavenArtifacts?: UploadedMavenArtifact[];

  @SpeakeasyMetadata({ data: "json, name=numArtifacts" })
  numArtifacts?: string;

  @SpeakeasyMetadata({ data: "json, name=pythonPackages", elemType: UploadedPythonPackage })
  pythonPackages?: UploadedPythonPackage[];
}
