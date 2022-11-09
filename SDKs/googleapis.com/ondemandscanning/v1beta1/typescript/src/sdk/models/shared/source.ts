import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceContext } from "./sourcecontext";
import { SourceContext } from "./sourcecontext";
import { FileHashes } from "./filehashes";


// Source
/** 
 * Source describes the location of the source used for the build.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalContexts", elemType: shared.SourceContext })
  additionalContexts?: SourceContext[];

  @Metadata({ data: "json, name=artifactStorageSourceUri" })
  artifactStorageSourceUri?: string;

  @Metadata({ data: "json, name=context" })
  context?: SourceContext;

  @Metadata({ data: "json, name=fileHashes", elemType: shared.FileHashes })
  fileHashes?: Map<string, FileHashes>;
}
