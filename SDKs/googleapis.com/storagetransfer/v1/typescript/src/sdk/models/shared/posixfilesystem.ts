import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PosixFilesystem
/** 
 * A POSIX filesystem resource.
**/
export class PosixFilesystem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rootDirectory" })
  rootDirectory?: string;
}
