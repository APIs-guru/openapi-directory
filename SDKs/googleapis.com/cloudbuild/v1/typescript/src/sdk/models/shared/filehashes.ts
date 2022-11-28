import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";



// FileHashes
/** 
 * Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.
**/
export class FileHashes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileHash", elemType: Hash })
  fileHash?: Hash[];
}
