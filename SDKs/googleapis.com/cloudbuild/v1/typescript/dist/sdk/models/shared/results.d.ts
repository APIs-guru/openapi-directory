import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSpan } from "./timespan";
import { BuiltImage } from "./builtimage";
import { UploadedMavenArtifact } from "./uploadedmavenartifact";
import { UploadedPythonPackage } from "./uploadedpythonpackage";
/**
 * Artifacts created by the build pipeline.
**/
export declare class Results extends SpeakeasyBase {
    artifactManifest?: string;
    artifactTiming?: TimeSpan;
    buildStepImages?: string[];
    buildStepOutputs?: string[];
    images?: BuiltImage[];
    mavenArtifacts?: UploadedMavenArtifact[];
    numArtifacts?: string;
    pythonPackages?: UploadedPythonPackage[];
}
