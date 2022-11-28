import { SpeakeasyBase } from "../../../internal/utils";
import { MavenArtifact } from "./mavenartifact";
import { ArtifactObjects } from "./artifactobjects";
import { PythonPackage } from "./pythonpackage";
/**
 * Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
**/
export declare class Artifacts extends SpeakeasyBase {
    images?: string[];
    mavenArtifacts?: MavenArtifact[];
    objects?: ArtifactObjects;
    pythonPackages?: PythonPackage[];
}
