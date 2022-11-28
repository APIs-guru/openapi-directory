import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// File
/** 
 * File information about the related binary/library used by an executable, or the script used by a script interpreter
**/
export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=hashedSize" })
  hashedSize?: string;

  @SpeakeasyMetadata({ data: "json, name=partiallyHashed" })
  partiallyHashed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=sha256" })
  sha256?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;
}
