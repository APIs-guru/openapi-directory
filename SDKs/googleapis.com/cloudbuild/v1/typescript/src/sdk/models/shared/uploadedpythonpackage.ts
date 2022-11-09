import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileHashes } from "./filehashes";
import { TimeSpan } from "./timespan";


// UploadedPythonPackage
/** 
 * Artifact uploaded using the PythonPackage directive.
**/
export class UploadedPythonPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileHashes" })
  fileHashes?: FileHashes;

  @Metadata({ data: "json, name=pushTiming" })
  pushTiming?: TimeSpan;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
