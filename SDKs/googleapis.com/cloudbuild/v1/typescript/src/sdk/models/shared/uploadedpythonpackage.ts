import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileHashes } from "./filehashes";
import { TimeSpan } from "./timespan";



// UploadedPythonPackage
/** 
 * Artifact uploaded using the PythonPackage directive.
**/
export class UploadedPythonPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileHashes" })
  fileHashes?: FileHashes;

  @SpeakeasyMetadata({ data: "json, name=pushTiming" })
  pushTiming?: TimeSpan;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
