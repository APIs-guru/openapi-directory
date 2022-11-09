import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PosixFilesystem
/** 
 * A POSIX filesystem resource.
**/
export class PosixFilesystem extends SpeakeasyBase {
  @Metadata({ data: "json, name=rootDirectory" })
  rootDirectory?: string;
}
