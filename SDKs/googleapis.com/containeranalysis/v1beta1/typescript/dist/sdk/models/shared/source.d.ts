import { SpeakeasyBase } from "../../../internal/utils";
import { SourceContext } from "./sourcecontext";
import { FileHashes } from "./filehashes";
/**
 * Source describes the location of the source used for the build.
**/
export declare class Source extends SpeakeasyBase {
    additionalContexts?: SourceContext[];
    artifactStorageSourceUri?: string;
    context?: SourceContext;
    fileHashes?: Map<string, FileHashes>;
}
