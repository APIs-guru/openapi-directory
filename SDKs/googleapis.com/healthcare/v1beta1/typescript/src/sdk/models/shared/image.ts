import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Image
/** 
 * Raw bytes representing consent artifact content.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsUri" })
  gcsUri?: string;

  @Metadata({ data: "json, name=rawBytes" })
  rawBytes?: string;
}
