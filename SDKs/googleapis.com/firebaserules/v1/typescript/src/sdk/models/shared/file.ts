import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// File
/** 
 * `File` containing source content.
**/
export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
