import { SpeakeasyBase } from "../../../internal/utils";
import { FileHashes } from "./filehashes";
import { TimeSpan } from "./timespan";
/**
 * A Maven artifact uploaded using the MavenArtifact directive.
**/
export declare class UploadedMavenArtifact extends SpeakeasyBase {
    fileHashes?: FileHashes;
    pushTiming?: TimeSpan;
    uri?: string;
}
