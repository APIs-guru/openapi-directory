import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DownloadParameters
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class DownloadParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowGzipCompression" })
  allowGzipCompression?: boolean;

  @Metadata({ data: "json, name=ignoreRange" })
  ignoreRange?: boolean;
}
