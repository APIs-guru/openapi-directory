import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UrlDownloadSize
/** 
 * The URL-level breakdown for the download size.
**/
export class UrlDownloadSize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadSizeKb" })
  downloadSizeKb?: number;

  @SpeakeasyMetadata({ data: "json, name=normalizedUrl" })
  normalizedUrl?: string;
}
