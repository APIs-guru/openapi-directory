import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceContext } from "./sourcecontext";
import { FileHashes } from "./filehashes";



// Source
/** 
 * Source describes the location of the source used for the build.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalContexts", elemType: SourceContext })
  additionalContexts?: SourceContext[];

  @SpeakeasyMetadata({ data: "json, name=artifactStorageSourceUri" })
  artifactStorageSourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: SourceContext;

  @SpeakeasyMetadata({ data: "json, name=fileHashes", elemType: FileHashes })
  fileHashes?: Map<string, FileHashes>;
}
