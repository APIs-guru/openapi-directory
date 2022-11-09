import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TimeSpan } from "./timespan";
import { BuiltImage } from "./builtimage";
import { UploadedMavenArtifact } from "./uploadedmavenartifact";
import { UploadedPythonPackage } from "./uploadedpythonpackage";


// Results
/** 
 * Artifacts created by the build pipeline.
**/
export class Results extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactManifest" })
  artifactManifest?: string;

  @Metadata({ data: "json, name=artifactTiming" })
  artifactTiming?: TimeSpan;

  @Metadata({ data: "json, name=buildStepImages" })
  buildStepImages?: string[];

  @Metadata({ data: "json, name=buildStepOutputs" })
  buildStepOutputs?: string[];

  @Metadata({ data: "json, name=images", elemType: shared.BuiltImage })
  images?: BuiltImage[];

  @Metadata({ data: "json, name=mavenArtifacts", elemType: shared.UploadedMavenArtifact })
  mavenArtifacts?: UploadedMavenArtifact[];

  @Metadata({ data: "json, name=numArtifacts" })
  numArtifacts?: string;

  @Metadata({ data: "json, name=pythonPackages", elemType: shared.UploadedPythonPackage })
  pythonPackages?: UploadedPythonPackage[];
}
