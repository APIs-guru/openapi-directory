import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DownloadParameters
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DownloadParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowGzipCompression" })
  allowGzipCompression?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ignoreRange" })
  ignoreRange?: boolean;
}
