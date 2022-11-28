import { SpeakeasyBase } from "../../../internal/utils";
import { FileHashes } from "./filehashes";
import { TimeSpan } from "./timespan";
/**
 * Artifact uploaded using the PythonPackage directive.
**/
export declare class UploadedPythonPackage extends SpeakeasyBase {
    fileHashes?: FileHashes;
    pushTiming?: TimeSpan;
    uri?: string;
}
