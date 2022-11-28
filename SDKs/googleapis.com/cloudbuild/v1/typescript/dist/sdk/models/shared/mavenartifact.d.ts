import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
**/
export declare class MavenArtifact extends SpeakeasyBase {
    artifactId?: string;
    groupId?: string;
    path?: string;
    repository?: string;
    version?: string;
}
