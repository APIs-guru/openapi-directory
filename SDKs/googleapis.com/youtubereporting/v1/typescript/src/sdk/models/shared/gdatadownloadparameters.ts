import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GdataDownloadParameters
/** 
 * gdata
**/
export class GdataDownloadParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowGzipCompression" })
  allowGzipCompression?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ignoreRange" })
  ignoreRange?: boolean;
}
