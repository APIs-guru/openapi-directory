import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileHashes } from "./filehashes";
import { TimeSpan } from "./timespan";



// UploadedMavenArtifact
/** 
 * A Maven artifact uploaded using the MavenArtifact directive.
**/
export class UploadedMavenArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileHashes" })
  fileHashes?: FileHashes;

  @SpeakeasyMetadata({ data: "json, name=pushTiming" })
  pushTiming?: TimeSpan;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
