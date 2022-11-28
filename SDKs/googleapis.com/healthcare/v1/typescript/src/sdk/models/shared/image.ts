import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Image
/** 
 * Raw bytes representing consent artifact content.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsUri" })
  gcsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=rawBytes" })
  rawBytes?: string;
}
