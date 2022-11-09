import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// File
/** 
 * File information about the related binary/library used by an executable, or the script used by a script interpreter
**/
export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;

  @Metadata({ data: "json, name=hashedSize" })
  hashedSize?: string;

  @Metadata({ data: "json, name=partiallyHashed" })
  partiallyHashed?: boolean;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=sha256" })
  sha256?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;
}
