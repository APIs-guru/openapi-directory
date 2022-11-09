import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hash } from "./hash";


// FileHashes
/** 
 * Container message for hashes of byte content of files, used in SourceProvenance messages to verify integrity of source input to the build.
**/
export class FileHashes extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileHash", elemType: shared.Hash })
  fileHash?: Hash[];
}
