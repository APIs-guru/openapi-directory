import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GdataDownloadParameters
/** 
 * gdata
**/
export class GdataDownloadParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowGzipCompression" })
  allowGzipCompression?: boolean;

  @Metadata({ data: "json, name=ignoreRange" })
  ignoreRange?: boolean;
}
