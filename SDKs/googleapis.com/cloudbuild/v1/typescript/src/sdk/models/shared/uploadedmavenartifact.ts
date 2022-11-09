import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileHashes } from "./filehashes";
import { TimeSpan } from "./timespan";


// UploadedMavenArtifact
/** 
 * A Maven artifact uploaded using the MavenArtifact directive.
**/
export class UploadedMavenArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileHashes" })
  fileHashes?: FileHashes;

  @Metadata({ data: "json, name=pushTiming" })
  pushTiming?: TimeSpan;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
