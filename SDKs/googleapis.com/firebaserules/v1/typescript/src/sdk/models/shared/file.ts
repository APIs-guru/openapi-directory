import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// File
/** 
 * `File` containing source content.
**/
export class File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
