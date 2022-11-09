import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UrlDownloadSize
/** 
 * The URL-level breakdown for the download size.
**/
export class UrlDownloadSize extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadSizeKb" })
  downloadSizeKb?: number;

  @Metadata({ data: "json, name=normalizedUrl" })
  normalizedUrl?: string;
}
